"use client";

import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["blindfoldProtocol"];
};

export default function ValueTuningBlindfoldProtocol({ content }: Props) {
  return (
    <section id="blindfold-protocol" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <EyeOff className="w-8 h-8 opacity-40" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase opacity-50">
                {content.label}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">
              {content.heading}
            </h2>
            <p className="text-xs opacity-60 font-baskervville-italic leading-relaxed">
              &quot;{content.philosophyQuote}&quot;
            </p>
            <p className="text-xs opacity-40 mt-2">
              {content.philosophyAuthor}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-6 text-base leading-relaxed opacity-80">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  {content.col1Heading}
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  {content.col1Text}
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  {content.col2Heading}
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  {content.col2Text}
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  {content.col3Heading}
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  {content.col3Text}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-4xl bg-[#76E897] mt-8">
              <p className="text-lg leading-relaxed font-baskervville-italic opacity-90 text-center">
                &quot;{content.largeQuote}&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
