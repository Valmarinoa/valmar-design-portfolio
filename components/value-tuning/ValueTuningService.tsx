"use client";

import { motion } from "framer-motion";
import StaticGradient from "../animations/StaticGradient";
import AnimatedBlurb from "../animations/AnimatedBlurb";

export default function ValueTuningService() {
  return (
    <section id="service" className="py-16 px-6 md:px-12 relative md:my-12 md:mx-24 text-neutral-950 rounded-4xl overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <StaticGradient color1="#FF9914" color2="#FF6B00" color3="#b27c66" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center gap-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Service
            </span>
            <h2 className="text-3xl md:text-4xl">
            Run a Value Tuning audit for your brand
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-base leading-relaxed opacity-80"
          >
            <p>
            Engagements run over 2–4 days and deliver a full sensory audit report with design criteria and strategic recommendations. Suited to product companies, packaging teams, and brand strategists preparing for repositioning or launch.
            </p>
          </motion.div>

          <AnimatedBlurb>
          <a
            href="mailto:valenmarinocol@gmail.com"
            className="shrink-0 text-xs uppercase bg-neutral-900 p-5 whitespace-nowrap rounded-full tracking-widest text-background border border-transparent hover:bg-background hover:border hover:border-neutral-900 hover:text-neutral-900 transition-all"
            aria-label="Work with me (email)"
          >
            Let's Work together
          </a>
          </AnimatedBlurb>
        </div>
      </div>
    </section>
  );
}