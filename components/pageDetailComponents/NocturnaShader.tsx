"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { nocturnaFrag as frag } from "@/components/shaders/nocturnaFrag";

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

export default function NocturnaShader({
  images,
  className = "",
  fixed = false,
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
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sandboxRef = useRef<any>(null);
  const currentRef = useRef(0);

  // ✅ stable seed (prevents “different seed” flashes, especially in dev StrictMode)
  const stableSeed = useRef<number>(seed ?? Math.random());

  const [ready, setReady] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // cache image ratios so we can set uniform properly
  const ratioCache = useRef(new Map<string, number>());

  const wrapperClass = fixed
    ? "fixed inset-0 w-screen h-screen z-0 overflow-hidden"
    : "absolute inset-0 w-full h-full z-0 overflow-hidden";

  const bgSrc = images?.[bgIndex];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;

    // ✅ No resizing: just lock canvas to viewport at mount + on real resize only.
    // (No scroll listeners, no parent measurement.)
    const setCanvasToViewport = () => {
      const dpi = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // set backing store size
      canvas.width = Math.floor(w * dpi);
      canvas.height = Math.floor(h * dpi);

      // set CSS size
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
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

      // always start hidden until we explicitly mark ready
      setReady(false);

      // size canvas once
      setCanvasToViewport();
      window.addEventListener("resize", setCanvasToViewport);

      const sb = new window.GlslCanvas(canvas);
      sandboxRef.current = sb;

      // load shader
      sb.load(frag);

      // set uniforms ASAP
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

      // ✅ critical: don’t reveal canvas until texture+ratio uniform is set AND we’ve had 1 RAF
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
        window.removeEventListener("resize", setCanvasToViewport);
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
    // do NOT include `seed` here; we use stableSeed.current
    bgColor,
    useBlocks,
    speed,
    imageScale,
    imageFit,
    chromatic,
    onReady,
  ]);

  return (
    <div className={`${wrapperClass} ${className}`}>
      {/* Optional “static background image” layer */}
      {showImageBackground && bgSrc ? (
        <div
          className="absolute inset-0 bg-center bg-cover scale-150"
          style={{ backgroundImage: `url(${bgSrc})`, opacity: backgroundOpacity }}
        />
      ) : null}

      {/* Fade the canvas IN only when ready (prevents wrong first frame flash) */}
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
