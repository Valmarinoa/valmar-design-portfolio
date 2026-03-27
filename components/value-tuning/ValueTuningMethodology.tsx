"use client";

import { motion } from "framer-motion";
import { methodologyAudits } from "@/data/valueTuning";

export default function ValueTuningMethodology() {
  return (
    <section id="methodology" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-6">The Methodology</h2>
          <p className="text-base opacity-80 max-w-1/2">
            Value Tuning operates through five sensory audits, each designed to
            isolate and optimize specific perceptual channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {methodologyAudits.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/2] bg-neutral-200 mb-6 overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs tracking-widest uppercase">
                  {item.placeholder}
                </div>
              </div>
              <span className="text-xs tracking-widest opacity-40 mb-2 block">
                {item.num}
              </span>
              <h3 className="text-2xl mb-3 group-hover:italic transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}