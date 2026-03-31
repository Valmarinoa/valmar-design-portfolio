"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { easeOutElegant, fadeInUp, staggerContainer } from "@/anim/value-motion";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  content: ValueTuningContent["hero"];
  videos?: string[];
};

export default function ValueTuningHero({
  heroOpacity,
  heroScale,
  content,
  videos = [],
}: Props) {
  const videoSources = videos.length > 0 ? videos : [
    "/media/valuetuning/research-findings/finding-3.mp4",
    "/media/valuetuning/research-findings/finding-5.mp4",
    "/media/valuetuning/research-findings/finding-4.mp4",
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="flex gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-8 text-[9px] tracking-widest uppercase opacity-60"
            >
              {content.tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={fadeInUp}
                  className="border border-neutral-700 py-1 px-3 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.3 }}
              className="text-4xl lg:text-[4.5rem] leading-[0.95] mb-8"
            >
              Value Tuning:
              <br />
              <span className="font-baskervville-italic">{content.titleLine2}</span>
              <br />
              {content.titleLine3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:block text-base lg:text-lg max-w-3xl leading-relaxed opacity-80"
            >
              {content.descDesktop}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="md:hidden block text-base max-w-xl leading-6 opacity-80"
            >
              {content.descMobile}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.4 }}
              className="flex flex-col mt-10 gap-2"
            >
              <p className="text-xs text-gray-400">{content.collaboration}</p>
              <Image
                src="/media/signify-logo-footer.png"
                alt="Signify"
                width={115}
                height={10}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Right Column - 3 Videos */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.5 }}
            className="w-[30%] flex flex-col justify-center items-end rounded-4xl h-fit overflow-hidden"
          >
            {videoSources.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: easeOutElegant,
                  delay: 0.6 + (index * 0.15),
                }}
                className="relative w-full aspect-video bg-neutral-100 overflow-hidden"
              >
                <video
                  src={src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">{content.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-neutral-900"
        />
      </motion.div>
    </section>
  );
}
