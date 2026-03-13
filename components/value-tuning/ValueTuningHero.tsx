"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { easeOutElegant, fadeInUp, staggerContainer } from "@/anim/value-motion";

type Props = {
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
};

export default function ValueTuningHero({
  heroOpacity,
  heroScale,
}: Props) {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-8 mb-12 text-[9px] tracking-widest uppercase opacity-60"
        >
          <motion.span
            variants={fadeInUp}
            className="border border-neutral-700 py-1 px-2 rounded-full"
          >
            Value Tuning
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className="border border-neutral-700 py-1 px-2 rounded-full"
          >
            Sensory Audit
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className="border border-neutral-700 py-1 px-2 rounded-full"
          >
            Brand Transformation
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className="border border-neutral-700 py-1 px-2 rounded-full"
          >
            Brand Strategy
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.3 }}
          className="text-5xl md:text-[5.2rem] leading-[0.9] mb-8"
        >
          Beyond the Visual:
          <br />
          <span className="italic">The Hidden Language</span>
          <br />
          of Product Perception
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg max-w-xl leading-relaxed opacity-80"
        >
          A self-developed research methodology designed to decode how products
          communicate value through the senses. By separating brand expectation
          from embodied experience, the study reveals how materiality, weight,
          sound, texture, and even smell silently translate brand narratives, and
          how our perception of luxury is rooted as much in primal sensory
          instincts as in cultural symbolism.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.4 }}
        className="flex flex-col mt-12 gap-1"
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