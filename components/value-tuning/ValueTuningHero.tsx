"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { easeOutElegant, fadeInUp, staggerContainer } from "@/anim/value-motion";

type Props = {
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  videos?: string[]; // Array of video URLs
};

export default function ValueTuningHero({
  heroOpacity,
  heroScale,
  videos = [],
}: Props) {
  // Default videos if none provided - using placeholders
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
            
              <motion.span
                variants={fadeInUp}
                className="border border-neutral-700 py-1 px-3 rounded-full"
              >
                Sensory Audit
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="border border-neutral-700 py-1 px-3 rounded-full"
              >
                Brand Transformation
              </motion.span>
              <motion.span
                variants={fadeInUp}
                className="border border-neutral-700 py-1 px-3 rounded-full"
              >
                Brand Strategy
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[0.95] mb-8"
            >
              Value Tuning:
              <br />
              <span className="italic">The Hidden Language</span>
              <br />
              of Brand Perception
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:block text-base lg:text-lg max-w-xl leading-relaxed opacity-80"
            >
              A self-developed research methodology designed to decode how products
              communicate value through the senses. By separating brand expectation
              from embodied experience, the study reveals how materiality, weight,
              sound, texture, and even smell silently translate brand narratives, and
              how our perception of luxury is rooted as much in primal sensory
              instincts as in cultural symbolism.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="md:hidden block text-base max-w-xl leading-6 opacity-80"
            >
              Value Tuning unlocks products' secret language of luxury through touch, sound, weight, even smell. It reveals if they truly feel premium... or fall flat. Perfect for Signify's shift from Philips' tech-trust vibe to cozy smart-home magic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.4 }}
              className="flex flex-col mt-10 gap-2"
            >
              <p className="text-xs text-gray-400">In collaboration with</p>
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
            className="w-[30%] flex flex-col justify-center items-end"
          >
            {videoSources.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: easeOutElegant, 
                  delay: 0.6 + (index * 0.15) 
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
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-neutral-900"
        />
      </motion.div>
    </section>
  );
}