"use client";

import { motion } from "framer-motion";
import { designCriteriaSections } from "@/data/valueTuning";

export default function ValueTuningDesignCriteria() {
  return (
    <section id="design-criteria" className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            The Framework
          </span>
          <h2 className="text-3xl md:text-4xl mb-6">
            From Insight to Design Criteria
          </h2>
          <p className="text-base opacity-80 max-w-2xl leading-relaxed">
            Each sensory audit evaluates specific, measurable attributes derived
            from user research. These parameters serve as both diagnostic tools and
            design targets.
          </p>
        </motion.div>

        <div className="space-y-16">
          {designCriteriaSections.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="border-t border-neutral-300 pt-8"
            >
              <h3 className="text-2xl md:text-3xl mb-8">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.criteria.map((criterion, cidx) => (
                  <motion.div
                    key={criterion.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: cidx * 0.1 + 0.2 }}
                    className="group"
                  >
                    <h4 className="text-xs font-medium tracking-widest uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {criterion.label}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-80">
                      {criterion.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 p-8 md:p-12 border border-neutral-300 bg-white"
        >
          <span className="text-xs tracking-widest uppercase opacity-60 block mb-4">
            Key Insight
          </span>
          <p className="text-xl md:text-2xl leading-relaxed italic">
            &quot;Perceived quality is not the sum of individual sensory inputs,
            but their coherence. A product that sounds premium but feels cheap
            creates cognitive dissonance. The goal is alignment across all five
            parameters.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}