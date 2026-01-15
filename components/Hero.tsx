"use client";

import React, { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import BlurText from "./animations/BlurText";
import NocturnaShader from "./pageDetailComponents/NocturnaShader";
import LogoSvg from "./svg/LogoSvg";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Make parallax depend on the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // progress while scrolling THROUGH the hero
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  // Stronger + more readable values (px)
  const bgY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, 180]);
  const bgScale = useTransform(
    smooth,
    [0, 1],
    reduceMotion ? [1, 1] : [1.06, 1.16]
  );

  const fgY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, -110]);
  const fgScale = useTransform(
    smooth,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 0.97]
  );

  const fgOpacity = useTransform(
    smooth,
    [0, 0.7, 1],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.9]
  );

  const shaderProps = useMemo(
    () => ({
      images: ["/media/globo-1.png"],
      clickToCycle: false,
      speed: 2.5,
      chromatic: 0.6,
      imageFit: "contain" as const,
      imageScale: 1.6,
      bgColor: [241, 241, 241] as [number, number, number],
      fixed: false,
    }),
    []
  );

  return (
    // Make the section taller to give scroll distance
    <section ref={sectionRef} className="relative h-svh w-full overflow-hidden">
      {/* Sticky viewport canvas */}
      <div className="sticky top-0 h-svh w-full overflow-hidden z-9999">
        {/* Background parallax */}
        <motion.div
          className="absolute inset-0 "
          style={{
            y: bgY,
            scale: bgScale,
            willChange: "transform",
          }}
          aria-hidden="true"
        >
          <NocturnaShader {...shaderProps} />
        </motion.div>

        {/* Foreground parallax (slower, opposite) */}
        <motion.div
          className="absolute top-[50%] left-1/2 w-full px-6 flex-col gap-3 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center mix-blend-exclusion"
          style={{
            y: fgY,
            scale: fgScale,
            opacity: fgOpacity,
            willChange: "transform, opacity",
          }}
        >
          <BlurText
            as="h1"
            text="Valentina Marino"
            delay={0.6}
            mode="words"
            className="mix-blend-difference font-helvetica-neue text-white text-lg tracking-widest"
          />

          <div className="h-13">
            <LogoSvg className="h-full w-auto text-white" />
          </div>

          <BlurText
            as="h1"
            text="Product & Experience Designer"
            delay={0.7}
            mode="words"
            className="mix-blend-difference font-helvetica-neue text-white text-sm tracking-widest"
          />
        </motion.div>
      </div>
    </section>
  );
}
