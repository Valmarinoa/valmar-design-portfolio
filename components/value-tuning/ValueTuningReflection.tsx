"use client";

import { motion } from "framer-motion";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["reflection"];
};

export default function ValueTuningReflection({ content }: Props) {
  return (
    <section id="reflection" className="py-16 px-6 md:px-12 relative md:mb-24 md:mx-24 text-white bg-neutral-950 rounded-4xl overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              {content.label}
            </span>
            <h2 className="text-3xl md:text-4xl mb-8">
              {content.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed opacity-80">
              {content.body.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-square bg-neutral-200 overflow-hidden rounded-4xl flex items-center justify-center"
          >
            <div className="text-neutral-400 text-sm tracking-widest uppercase">
              [Insert: Process Photo / Testing Setup]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
