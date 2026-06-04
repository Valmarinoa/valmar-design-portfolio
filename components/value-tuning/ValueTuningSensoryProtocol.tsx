"use client";

import { motion } from "framer-motion";
import { sensoryProtocolSteps } from "@/data/valueTuning";
import StaticGradient from "../animations/StaticGradient";
import InViewVideo from "@/components/value-tuning/InViewVideo";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["sensoryProtocol"];
};

const atmosphericVideos = sensoryProtocolSteps.filter(
  (item) => item.mediaType === "video"
);

export default function ValueTuningSensoryProtocol({ content }: Props) {
  return (
    <section id="sensory-protocol" className="py-16 px-6 md:px-12 relative md:my-12 md:mx-24 text-white rounded-4xl overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
        <StaticGradient color1="#1D1D1D" color2="#301a4b" color3="#301a4b" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            {content.label}
          </span>
          <h2 className="text-3xl md:text-4xl mb-6">{content.heading}</h2>
          <div className="space-y-6 text-base opacity-80 max-w-2xl leading-relaxed">
            {content.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {atmosphericVideos.map((item, idx) => (
            <motion.div
              key={item.mediaSrc}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="overflow-hidden rounded-2xl aspect-video"
            >
              <InViewVideo
                src={item.mediaSrc}
                className="w-full h-full object-cover"
                aria-label={item.mediaAlt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
