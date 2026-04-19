"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLandingScroll } from "./providers/LandingScrollContext";

import BlurText from "./animations/BlurText";
import NocturnaShader from "./pageDetailComponents/NocturnaShader";
import LogoSvg from "./svg/LogoSvg";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import ScrollIndicator from "./ui/ScrollIndicator";

// Module-level flag: survives client-side navigation, resets only on full page reload
let logoHasAnimated = false;

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Capture whether this is a replay (nav away + back) at mount time, then mark as played
  const [skipLogoAnim] = useState(() => {
    const alreadyPlayed = logoHasAnimated;
    logoHasAnimated = true;
    return alreadyPlayed;
  });
  const reduceMotion = useReducedMotion();
  const locale = useLocale();
  const messages = getMessages(locale);

  const { setHasScrolledPastHero, setIsLandingPage, setScrollProgress } = useLandingScroll();
  const pastHeroRef = useRef(false);

  useEffect(() => {
    setIsLandingPage(true);
    return () => setIsLandingPage(false);
  }, [setIsLandingPage]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);

      let next = pastHeroRef.current;

      if (pastHeroRef.current) {
        next = latest > 0.92;
      } else {
        next = latest > 0.98;
      }

      if (next !== pastHeroRef.current) {
        pastHeroRef.current = next;
        setHasScrolledPastHero(next);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, setHasScrolledPastHero, setScrollProgress]);

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  const bgY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, 180]);
  const bgScale = useTransform(smooth, [0, 1], reduceMotion ? [1, 1] : [1.06, 1.16]);
  const fgY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, -110]);
  const fgScale = useTransform(smooth, [0, 1], reduceMotion ? [1, 1] : [1, 0.97]);
  const fgOpacity = useTransform(smooth, [0, 0.7, 1], reduceMotion ? [1, 1, 1] : [1, 1, 0.9]);

  const shaderProps = useMemo(
    () => ({
      images: ["/media/globo-1.png"],
      clickToCycle: false,
      speed: 0.5,
      chromatic: 0.6,
      imageFit: "contain" as const,
      // imageScale: 1.6,
      bgColor: [241, 241, 241] as [number, number, number],
      fixed: false,
      fadeInMs: 400,
      // maxDpr: 2,
      oversize: 1.05,
imageScale: 1.35,
maxDpr: 1.5,
    }),
    []
  );

  return (
    <section ref={sectionRef} className="relative h-svh w-full overflow-hidden">
      <div className="sticky top-0 h-svh w-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale, willChange: "transform" }}
          aria-hidden="true"
        >
          <NocturnaShader {...shaderProps} />
        </motion.div>

        <motion.div
          className="absolute top-[50%] left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 px-6 mix-blend-exclusion"
          style={{ y: fgY, scale: fgScale, opacity: fgOpacity, willChange: "transform, opacity" }}
        >
          <BlurText
            as="h1"
            text={messages.hero.name}
            delay={2.4}
            mode="words"
            className="text-lg font-light text-white mix-blend-difference"
          />
          <motion.div
            className="h-14"
            initial={{ opacity: skipLogoAnim ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={skipLogoAnim ? { duration: 0 } : { duration: 0.5, delay: 1.4 }}
          >
            <LogoSvg className="h-full w-auto text-white" />
          </motion.div>
          <BlurText
            as="h1"
            text={messages.hero.role}
            delay={2.4}
            mode="words"
            className="text-sm font-light text-white mix-blend-difference"
          />
        </motion.div>

        <ScrollIndicator delay={2.8} className="md:hidden text-white mix-blend-difference" />
      </div>
    </section>
  );
}