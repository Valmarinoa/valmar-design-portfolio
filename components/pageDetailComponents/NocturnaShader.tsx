// NocturnaShader.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { nocturnaFrag as frag } from "@/components/shaders/nocturnaFrag";

declare global {
  interface Window {
    GlslCanvas: any;
  }
}

type Props = {
  images: string[];
  className?: string;
  fixed?: boolean; // <-- ADD THIS BACK
  clickToCycle?: boolean;
  seed?: number;
  bgColor?: [number, number, number];
  useBlocks?: boolean;
  speed?: number;
  imageScale?: number;
  imageFit?: "cover" | "contain";
  showImageBackground?: boolean;
  backgroundOpacity?: number;
  chromatic?: number;
  onReady?: () => void;
  fadeInMs?: number;
  maxDpr?: number;
  oversize?: number;
};

export default function NocturnaShader({
  images,
  className = "",
  fixed = false, // <-- ADD THIS BACK
  clickToCycle = true,
  seed,
  bgColor = [255, 255, 255],
  useBlocks = true,
  speed = 1,
  imageScale = 1,
  imageFit = "cover",
  showImageBackground = false,
  backgroundOpacity = 1,
  chromatic = 0,
  onReady,
  fadeInMs = 600,
  maxDpr = 2,
  oversize = 1.15,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sandboxRef = useRef<any>(null);
  const currentRef = useRef(0);
  const stableSeed = useRef<number>(seed ?? Math.random());
  const rafRef = useRef<number | undefined>(undefined);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isInitializedRef = useRef(false);
  
  const [ready, setReady] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const ratioCache = useRef(new Map<string, number>());

  // <-- ADD THIS BACK: fixed vs absolute positioning
  const wrapperClass = fixed
    ? "fixed inset-0 w-screen h-screen z-0 overflow-hidden"
    : "absolute inset-0 w-full h-full z-0 overflow-hidden";

  const bgSrc = images?.[bgIndex];

  const getViewportSize = useCallback(() => {
    if (window.visualViewport) {
      return {
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;

    let cancelled = false;
    let loadAttempts = 0;
    const maxLoadAttempts = 50;

    const setCanvasSize = (force = false) => {
      const { width: vw, height: vh } = getViewportSize();
      const rawDpr = window.devicePixelRatio || 1;
      const dpr = Math.min(rawDpr, maxDpr);
      
      const internalWidth = Math.floor(vw * oversize * dpr);
      const internalHeight = Math.floor(vh * oversize * dpr);

      if (force || canvas.width !== internalWidth || canvas.height !== internalHeight) {
        canvas.width = internalWidth;
        canvas.height = internalHeight;
        
        if (sandboxRef.current?.resize) {
          sandboxRef.current.resize();
        }
      }
    };

    const safeSetUniform = (name: string, ...vals: any[]) => {
      const sb = sandboxRef.current;
      if (!sb || !sb.gl || !sb.program) return false;
      try {
        sb.setUniform(name, ...vals);
        return true;
      } catch (e) {
        return false;
      }
    };

    const computeRatio = (src: string): Promise<number> => {
      if (ratioCache.current.has(src)) {
        return Promise.resolve(ratioCache.current.get(src)!);
      }
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const ratio = img.naturalWidth / Math.max(1, img.naturalHeight);
          ratioCache.current.set(src, ratio);
          resolve(ratio);
        };
        img.onerror = () => {
          ratioCache.current.set(src, 1);
          resolve(1);
        };
        img.src = src;
      });
    };

    const setImageUniform = async (index: number = currentRef.current) => {
      const src = images?.[index];
      if (!src) return;
      
      safeSetUniform("image", src);
      const ratio = await computeRatio(src);
      if (!cancelled) {
        safeSetUniform("u_textureRatio", ratio);
      }
    };

    const checkWebGLReady = () => {
      const sb = sandboxRef.current;
      if (!sb?.gl || !sb?.program) return false;
      const gl = sb.gl;
      return gl.getProgramParameter(sb.program, gl.LINK_STATUS) === true;
    };

    const init = async () => {
      if (!window.GlslCanvas || cancelled) return;
      
      isInitializedRef.current = true;
      setCanvasSize(true);

      try {
        const sb = new window.GlslCanvas(canvas);
        sandboxRef.current = sb;

        sb.load(frag);

        safeSetUniform("seed", stableSeed.current);
        safeSetUniform("u_useBlocks", useBlocks ? 1 : 0);
        safeSetUniform("u_speed", speed);
        safeSetUniform("u_imageScale", imageScale);
        safeSetUniform("u_fitMode", imageFit === "cover" ? 1 : 0);
        safeSetUniform("u_chromatic", chromatic);
        safeSetUniform("u_bg", bgColor[0] / 255, bgColor[1] / 255, bgColor[2] / 255);

        const handleClick = () => {
          if (!clickToCycle || !images?.length) return;
          currentRef.current = (currentRef.current + 1) % images.length;
          void setImageUniform(currentRef.current);
          setBgIndex(currentRef.current);
        };

        if (clickToCycle) {
          canvas.addEventListener("click", handleClick);
        }

        await setImageUniform(0);

        const waitForReady = () => {
          if (cancelled) return;
          
          if (checkWebGLReady()) {
            rafRef.current = requestAnimationFrame(() => {
              if (!cancelled) {
                setReady(true);
                onReady?.();
              }
            });
          } else if (loadAttempts < maxLoadAttempts) {
            loadAttempts++;
            rafRef.current = requestAnimationFrame(waitForReady);
          } else {
            setReady(true);
            onReady?.();
          }
        };

        waitForReady();

        return () => {
          if (clickToCycle) {
            canvas.removeEventListener("click", handleClick);
          }
        };
      } catch (err) {
        console.error("Shader initialization failed:", err);
        isInitializedRef.current = false;
      }
    };

    if (window.GlslCanvas) {
      const cleanup = init();
      return () => {
        cancelled = true;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        cleanup?.then?.(fn => fn?.());
      };
    } else {
      const checkInterval = setInterval(() => {
        if (window.GlslCanvas && !isInitializedRef.current) {
          clearInterval(checkInterval);
          init();
        }
      }, 50);

      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (!isInitializedRef.current) {
          setReady(true);
          onReady?.();
        }
      }, 5000);

      return () => {
        cancelled = true;
        clearInterval(checkInterval);
        clearTimeout(timeout);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [
    images, clickToCycle, bgColor, useBlocks, speed, 
    imageScale, imageFit, chromatic, onReady, maxDpr, oversize, getViewportSize
  ]);

  // Debounced resize handler
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas || !sandboxRef.current) return;
        
        const { width: vw, height: vh } = getViewportSize();
        const rawDpr = window.devicePixelRatio || 1;
        const dpr = Math.min(rawDpr, maxDpr);
        
        const newWidth = Math.floor(vw * oversize * dpr);
        const newHeight = Math.floor(vh * oversize * dpr);
        
        if (canvas.width !== newWidth || canvas.height !== newHeight) {
          canvas.width = newWidth;
          canvas.height = newHeight;
          
          if (sandboxRef.current.resize) {
            sandboxRef.current.resize();
          }
        }
      }, 250);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    } else {
      window.addEventListener("resize", handleResize);
    }
    
    return () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      } else {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [maxDpr, oversize, getViewportSize]);

  useEffect(() => {
    return () => {
      if (sandboxRef.current?.destroy) {
        sandboxRef.current.destroy();
      }
      sandboxRef.current = null;
      isInitializedRef.current = false;
    };
  }, []);

  return (
    <div className={`${wrapperClass} ${className}`}>
      {/* Background fallback matching shader color */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          backgroundColor: `rgb(${bgColor.join(',')})`,
          opacity: ready ? 0 : 1 
        }}
      />
      
      {showImageBackground && bgSrc ? (
        <div
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${bgSrc})`, 
            opacity: ready ? backgroundOpacity : 1,
          }}
        />
      ) : null}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: ready ? 1 : 0,
          transition: `opacity ${fadeInMs}ms ease-out`,
          transform: `scale(${oversize})`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      />
    </div>
  );
}