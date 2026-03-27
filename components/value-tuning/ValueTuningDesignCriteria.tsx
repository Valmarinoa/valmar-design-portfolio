"use client";

import { motion } from "framer-motion";
import { designCriteriaSections } from "@/data/valueTuning";

// Bumpy circle: R=210, A=22 amplitude, 14 bumps, 200 sample points → visually smooth
const SEAL_PATH = (() => {
  const cx = 250, cy = 250, R = 210, A = 22, bumps = 14, n = 200;
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    const r = R + A * Math.sin(bumps * angle);
    const x = (cx + r * Math.cos(angle)).toFixed(1);
    const y = (cy + r * Math.sin(angle)).toFixed(1);
    pts.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }
  return pts.join(" ") + " Z";
})();

export default function ValueTuningDesignCriteria() {
  return (
    <section id="design-criteria" className=" relative pt-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto pb-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            Design Criteria
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

        <div className="space-y-10">
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

      </div>

      {/* Seal floats at the bottom, half overlapping into the next section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-2/3 -translate-x-1/2 translate-y-1/2 z-10 w-[min(400px,80vw)]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square w-full"
        >
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <path d={SEAL_PATH} fill="#F05A1A" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-[22%]">
            <span className="text-[9px] tracking-widest uppercase opacity-75 block mb-3">
              Key Insight
            </span>
            <p className="text-xs md:text-sm leading-relaxed italic">
              &quot;Perceived quality is not the sum of individual sensory
              inputs, but their coherence. A product that sounds premium but
              feels cheap creates cognitive dissonance. The goal is alignment
              across all five parameters.&quot;
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}