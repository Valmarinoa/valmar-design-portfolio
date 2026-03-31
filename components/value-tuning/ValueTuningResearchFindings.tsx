"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { researchFindings } from "@/data/valueTuning";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["researchFindings"];
};

export default function ValueTuningResearchFindings({ content }: Props) {
  return (
    <section
      id="research-findings"
      className="py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
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
          <h2 className="text-3xl md:text-4xl mb-6">
            {content.heading}
          </h2>
          <p className="text-base opacity-80 max-w-2xl">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchFindings.map((card, idx) => {
            const localizedFinding = content.findings[idx];
            const hasMedia = Boolean(card.background?.src);

            return (
              <motion.div
                key={card.theme}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-4xl min-h-[420px] border border-neutral-200"
              >
                {/* Background media */}
                {hasMedia && card.background?.type === "image" && (
                  <img
                    src={card.background.src}
                    alt={card.background.alt ?? card.theme}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                {hasMedia && card.background?.type === "video" && (
                  <video
                    src={card.background.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}

                {/* Overlay */}
                <div
                  className={`absolute inset-0 ${
                    hasMedia ? "bg-black/45" : "bg-[#ff9914]"
                  }`}
                />

                {/* Soft gradient overlay for readability */}
                {hasMedia && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-black/20" />
                )}

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                  <div>
                    <Quote className="w-6 h-6 opacity-40 mb-4" />
                    <blockquote className="leading-relaxed mb-6 font-baskervville-italic text-base md:text-lg max-w-[34ch]">
                      &quot;{card.quote}&quot;
                    </blockquote>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <span className="text-xs tracking-widest uppercase opacity-70 block mb-2">
                      {localizedFinding.theme}
                    </span>
                    <p className="text-sm opacity-90 leading-relaxed mb-4 max-w-[42ch]">
                      {localizedFinding.insight}
                    </p>
                    <span className="text-xs opacity-70">— {card.brand}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
