"use client";

import { motion } from "framer-motion";

export default function ValueTuningProblem() {
  return (
    <section id="problem" className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-900 text-[#f5f4ed]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Brief
            </span>
            <h2 className="text-3xl md:text-4xl">
              From Technical Trust, to Emotional Experience
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
              For decades, Philips Lighting built its reputation on engineering
              reliability and technical excellence. But with the emergence of
              connected devices and the Smart Home ecosystem, the company began
              repositioning itself under a new name: Signify.
              <br />
              A brand built on technical trust and engineering reliability needed to
              transition into a space defined by domestic intimacy, atmosphere, and
              emotional experience.
              <br />
              <br />
              This shift raised an important question:
              <br />
              <span className="font-semibold">
                {" "}
                how can physical products express this transition through their
                sensory qualities?
              </span>
              <br />
              <br />I was invited to explore the gap between inherited brand
              perception and the embodied experience of these new domestic
              technologies, design and materiality.
              <br />
              To do so, I developed a qualitative research methodology designed to
              isolate how people interpret products through touch, sound, weight,
              and materiality, beyond brand recognition alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}