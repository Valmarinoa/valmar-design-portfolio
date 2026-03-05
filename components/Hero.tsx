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
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import FadeIn from "./animations/FadeIn";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const locale = useLocale();
  const messages = getMessages(locale);

  // Make parallax depend on the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], 
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
      oversize: 1.15, // 15% larger than viewport
      fadeInMs: 400,
      maxDpr: 2,
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
            text={messages.hero.name}
            delay={2.4}
            mode="words"
            className="mix-blend-difference  text-white text-lg font-light"
          />

          <FadeIn delay={1.4} className="h-14">
            <LogoSvg className="h-full w-auto text-white" />
          </FadeIn>

          <BlurText
            as="h1"
            text={messages.hero.role}
            delay={2.4}
            mode="words"
            className="mix-blend-difference text-white text-sm font-light "
          />
        </motion.div>
      </div>
    </section>
  );
}
