"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { impactCards } from "@/data/valueTuning";

export default function ValueTuningImpact() {
  return (
    <section id="impact" className=" py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            The Impact
          </span>
          <h2 className="text-3xl md:text-4xl mb-6">Beyond the Report</h2>
          <p className="text-base opacity-80 max-w-2xl">
            Research only matters if it changes decisions. Value Tuning was
            designed to give designers leverage in budget conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactCards.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 border border-neutral-200 bg-white"
            >
              <h3 className="text-lg mb-3">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="p-8 md:p-12 border border-neutral-300 bg-white text-center"
        >
          <Quote className="w-8 h-8 opacity-20 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 italic max-w-3xl mx-auto">
            &quot;The blindfold became a metaphor for my practice: removing the
            obvious to reveal the essential. Whether designing a lamp that breathes
            or researching how packaging shapes desire, I&apos;m drawn to moments
            where the invisible becomes tangible.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}