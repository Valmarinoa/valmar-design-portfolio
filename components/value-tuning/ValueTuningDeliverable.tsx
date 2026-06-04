"use client";

import { motion } from "framer-motion";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["deliverable"];
};

export default function ValueTuningDeliverable({ content }: Props) {
  return (
    <section id="deliverable" className="pt-[100px] pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            {content.label}
          </span>
          <h2 className="text-3xl md:text-4xl mb-6">{content.heading}</h2>
          <p className="text-base opacity-80 max-w-2xl leading-relaxed">
            {content.intro}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 text-base opacity-80 max-w-2xl leading-relaxed mb-10"
        >
          {content.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="opacity-50 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base opacity-80 max-w-2xl leading-relaxed"
        >
          {content.closing}
        </motion.p>
      </div>
    </section>
  );
}
