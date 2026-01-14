"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { rosaFrag as frag } from "@/components/shaders/rosaFrag";

declare global {
  interface Window {
    GlslCanvas: any;
  }
}

type Props = {
  images: string[];
  className?: string;
  fixed?: boolean;
  clickToCycle?: boolean;

  /** If omitted, we generate a stable seed once */
  seed?: number;

  bgColor?: [number, number, number];
  useBlocks?: boolean;

  speed?: number;
  imageScale?: number;
  imageFit?: "cover" | "contain";

  showImageBackground?: boolean;
  backgroundOpacity?: number;

  chromatic?: number;

  /** NEW */
  onReady?: () => void;
  fadeInMs?: number;
};

export default function RosaShader({
  images,
  className = "",
  fixed = false,
  clickToCycle = true,
  seed,
  bgColor = [225, 255, 255],
  useBlocks = true,
  speed = 1,
  imageScale = 1,
  imageFit = "cover",
  showImageBackground = false,
  backgroundOpacity = 1,
  chromatic = 0,
  onReady,
  fadeInMs = 600,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sandboxRef = useRef<any>(null);
  const currentRef = useRef(0);

  // ✅ stable seed
  const stableSeed = useRef<number>(seed ?? Math.random());

  const [ready, setReady] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // cache image ratios
  const ratioCache = useRef(new Map<string, number>());

  const wrapperClass = fixed
    ? "fixed inset-0 w-screen h-screen z-0 overflow-hidden"
    : "absolute inset-0 w-full h-full z-0 overflow-hidden";

  const bgSrc = images?.[bgIndex];

  // ✅ lock viewport size to prevent mobile address-bar “resize” retraction
  const lockedSizeRef = useRef<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;

    const setCanvasToLockedViewport = () => {
      const dpi = window.devicePixelRatio || 1;

      // lock size once
      if (!lockedSizeRef.current) {
        lockedSizeRef.current = { w: window.innerWidth, h: window.innerHeight };
      }

      const { w, h } = lockedSizeRef.current;

      // set backing store size
      canvas.width = Math.floor(w * dpi);
      canvas.height = Math.floor(h * dpi);

      // set CSS size
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const onResize = () => {
      // Only update lock on real resizes (orientation / width changes).
      // Ignore height-only changes caused by mobile browser chrome collapsing/expanding.
      const cur = lockedSizeRef.current;
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;

      if (!cur) {
        lockedSizeRef.current = { w: nextW, h: nextH };
        setCanvasToLockedViewport();
        return;
      }

      // width change = real layout change
      if (nextW !== cur.w) {
        lockedSizeRef.current = { w: nextW, h: nextH };
        setCanvasToLockedViewport();
      }
    };

    const safeSetUniform = (name: string, ...vals: any[]) => {
      const sb = sandboxRef.current;
      if (!sb || !sb.gl || !sb.program) return;
      sb.setUniform(name, ...vals);
    };

    const computeRatio = (src: string) => {
      const cached = ratioCache.current.get(src);
      if (cached != null) return Promise.resolve(cached);

      return new Promise<number>((resolve) => {
        const img = new Image();
        img.onload = () => {
          const ratio = img.naturalWidth / Math.max(1, img.naturalHeight);
          ratioCache.current.set(src, ratio);
          resolve(ratio);
        };
        img.onerror = () => resolve(1);
        img.src = src;
      });
    };

    const setImageUniform = async () => {
      const sb = sandboxRef.current;
      const src = images?.[currentRef.current];
      if (!sb || !src) return;

      safeSetUniform("image", src);

      const ratio = await computeRatio(src);
      if (cancelled) return;

      safeSetUniform("u_textureRatio", ratio);
    };

    const init = () => {
      if (!window.GlslCanvas) return;

      setReady(false);

      // ✅ size canvas once using locked viewport
      setCanvasToLockedViewport();
      window.addEventListener("resize", onResize);

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

      setBgIndex(0);

      const handleClick = () => {
        if (!clickToCycle || !images?.length) return;
        currentRef.current = (currentRef.current + 1) % images.length;
        void setImageUniform();
        setBgIndex(currentRef.current);
      };

      if (clickToCycle) canvas.addEventListener("click", handleClick);

      (async () => {
        await setImageUniform();
        if (cancelled) return;

        requestAnimationFrame(() => {
          if (cancelled) return;
          setReady(true);
          onReady?.();
        });
      })();

      return () => {
        if (clickToCycle) canvas.removeEventListener("click", handleClick);
        window.removeEventListener("resize", onResize);
      };
    };

    const boot = () => {
      const cleanup = init();
      (canvas as any).__shaderCleanup = cleanup;
    };

    if (!window.GlslCanvas) {
      const script = document.createElement("script");
      script.src = "/shaders/glslcanvas.min.js";
      script.async = true;
      script.onload = boot;
      document.body.appendChild(script);
    } else {
      boot();
    }

    return () => {
      cancelled = true;
      const cleanup = (canvas as any).__shaderCleanup;
      if (cleanup) cleanup();

      sandboxRef.current?.destroy?.();
      sandboxRef.current = null;
    };
  }, [
    images,
    fixed,
    clickToCycle,
    bgColor,
    useBlocks,
    speed,
    imageScale,
    imageFit,
    chromatic,
    onReady,
  ]);

  // ✅ apply locked CSS size to wrapper too, so the container doesn’t retract on mobile
  const lockedStyle =
    lockedSizeRef.current
      ? { width: `${lockedSizeRef.current.w}px`, height: `${lockedSizeRef.current.h}px` }
      : undefined;

  return (
    <div className={`${wrapperClass} ${className}`} style={lockedStyle}>
      {showImageBackground && bgSrc ? (
        <div
          className="absolute inset-0 bg-center bg-cover scale-150"
          style={{ backgroundImage: `url(${bgSrc})`, opacity: backgroundOpacity }}
        />
      ) : null}

      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: fadeInMs / 1000, ease: "easeOut" }}
      />
    </div>
  );
}
