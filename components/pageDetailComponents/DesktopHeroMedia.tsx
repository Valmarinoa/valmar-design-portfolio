"use client";

import Image from "next/image";
import { cubicBezier, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/types/project";
import BlurText from "../animations/BlurText";

type Props = {
  title: string;
  heroVideo?: string;
  heroMedia?: string;
  thumbnail?: string;
  project: Project;
};

const tagsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.4,
    },
  },
};

const tagItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.83, 0, 0.17, 1),
    },
  },
};

export default function DesktopHeroMedia({
  title,
  heroVideo,
  heroMedia,
  thumbnail,
  project,
}: Props) {
  const [ready, setReady] = useState(false);

  const src = heroVideo ?? heroMedia ?? thumbnail;
  if (!src) return null;

  const isVideo = Boolean(heroVideo);

  // ✅ parallax
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // progress while scrolling THROUGH this hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  // ---- Media parallax (background-ish) ----
  const mediaY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
  const mediaScale = useTransform(
    smooth,
    [0, 1],
    reduceMotion ? [1, 1] : [1.03, 1.12]
  );

  // ---- Content parallax (foreground-ish) ----
  const contentY = useTransform(smooth, [0, 1], reduceMotion ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(
    smooth,
    [0, 0.85, 1],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.92]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col-reverse md:flex-col h-fit pt-0 md:pt-32 overflow-hidden"
    >
      {/* CONTENT (parallax) */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          willChange: "transform, opacity",
        }}
        className="md:flex-row flex flex-col absolute bottom-0 left-0 right-0 py-8 md:pb-4 md:relative z-9999 mix-blend-exclusion md:mix-blend-normal text-white md:text-neutral-900"
      >
        <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 px-3 gap-1 md:gap-0">
          <BlurText
            as="h2"
            text={project.title}
            delay={1}
            mode="words"
            className="w-full text-5xl md:text-6xl text-left text-white md:text-neutral-900"
          />

          {project.tagline && (
            <BlurText
              as="h3"
              text={project.tagline}
              delay={1}
              mode="words"
              className="w-full text-lg text-left leading-5 font-light"
            />
          )}
        </div>

        <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 gap-7 md:gap-4 pt-4 md:pt-4 px-3">
          {project.description && (
            <BlurText
              as="h3"
              text={project.description}
              delay={1.6}
              mode="block"
              // className="w-full text-base md:text-2xl text-left md:leading-7"
              className="w-full text-sm md:text-2xl text-left leading-snug"
            />
          )}

          {project.tags?.length ? (
            <motion.div
              className="flex flex-wrap gap-2"
              variants={tagsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              {project.tags.map((tag) => (
                <motion.p
                  key={tag}
                  variants={tagItem}
                  className="border opacity-70 border-white/70 tracking-widest md:border-black/70 text-[9px] rounded-full px-3 pt-1 pb-0.5 whitespace-nowrap"
                >
                  {tag.toUpperCase()}
                </motion.p>
              ))}
            </motion.div>
          ) : null}
        </div>
      </motion.div>

      {/* MEDIA (parallax) */}
      <div className="relative w-full mt-0 h-screen md:h-[65vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            y: mediaY,
            scale: mediaScale,
            willChange: "transform",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.1,
          }}
        >
          {isVideo ? (
            <video
              src={heroVideo}
              muted
              playsInline
              // @ts-ignore
              webkit-playsinline="true"
              loop
              autoPlay
              preload="auto"
              controls={false}
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              poster={thumbnail}
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                v.muted = true;
                // @ts-ignore
                v.defaultMuted = true;
                const p = v.play();
                if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
              }}
              onCanPlay={(e) => {
                setReady(true);
                const v = e.currentTarget;
                const p = v.play();
                if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
              }}
              className="h-full w-full object-cover md:rounded-sm origin-bottom"
            />
          ) : (
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover md:rounded-sm"
              loading="lazy"
              onLoadingComplete={() => setReady(true)}
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
