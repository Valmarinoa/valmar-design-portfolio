"use client";

import { motion } from "framer-motion";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

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

type Props = {
  content: ValueTuningContent["designCriteria"];
};

export default function ValueTuningDesignCriteria({ content }: Props) {
  return (
    <section id="design-criteria" className="py-16 px-6 md:px-12 relative md:m-24 text-neutral-950 rounded-4xl border-neutral-600 border-[0.5px] bg-white">
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
          <p className="text-base opacity-80 max-w-2xl leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="space-y-10">
          {content.sections.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="border-neutral-600 border-t-[0.5px] pt-8"
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
        className="absolute bottom-0 left-2/3 translate-y-1/2 z-10 w-[min(400px,80vw)] hidden md:block"
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
              {content.sealLabel}
            </span>
            <p className="text-xs md:text-sm leading-relaxed font-baskervville-italic">
              &quot;{content.sealQuote}&quot;
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
