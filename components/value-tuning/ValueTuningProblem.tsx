"use client";

import { motion } from "framer-motion";
import StaticGradient from "../animations/StaticGradient";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["problem"];
};

export default function ValueTuningProblem({ content }: Props) {
  return (
    <section id="problem" className="py-16 px-6 md:px-12 relative md:m-24 text-neutral-950 rounded-4xl overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <StaticGradient color1="#11e395" color2="#aaefd3" color3="#1ecfc5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              {content.label}
            </span>
            <h2 className="text-3xl md:text-4xl">
              {content.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8 space-y-4 text-base leading-relaxed opacity-80"
          >
            {content.para1.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <p>
              {content.questionIntro}
              <br />
              <span className="font-semibold">{content.questionBold}</span>
            </p>
            {content.para3.split("\n").map((line, i) => (
              <p key={`p3-${i}`}>{line}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
