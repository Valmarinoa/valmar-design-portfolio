"use client";

import { motion } from "framer-motion";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["hypothesis"];
};

export default function ValueTuningHypothesis({ content }: Props) {
  return (
    <section id="hypothesis" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              {content.label}
            </span>

            <h2 className="text-3xl md:text-4xl mb-6">
              {content.heading}
            </h2>

            <div className="space-y-6 text-base opacity-80 leading-relaxed max-w-2xl">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <p>{content.p3}</p>
              <p className="text-sm font-medium opacity-90">{content.p4}</p>
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-4xl border border-neutral-300 bg-white overflow-hidden">
              <div className="aspect-video w-full bg-neutral-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GA70QZ978q8"
                  title={content.videoLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 border-t border-neutral-200">
                <p className="text-[10px] tracking-widest uppercase opacity-50 mb-2">
                  {content.videoLabel}
                </p>
                <p className="text-sm opacity-70 leading-relaxed max-w-xl">
                  {content.videoCaption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
