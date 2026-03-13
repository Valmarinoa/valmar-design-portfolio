"use client";

import { motion } from "framer-motion";

export default function ValueTuningReflection() {
  return (
    <section id="reflection" className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Reflection
            </span>
            <h2 className="text-3xl md:text-4xl mb-8">
              In an Increasingly Digital World
            </h2>
            <div className="space-y-6 text-base leading-relaxed opacity-80">
              <p>
                We touch screens but not objects. We swipe through images but
                rarely handle materials. The blindfold protocol recovers what
                we&apos;ve forgotten: that the body knows things the eye has been
                trained to overlook.
              </p>
              <p>
                Working with Signify, I learned that the most sophisticated
                technology means little if the body rejects it at first touch. The
                weight of a closing lid, the temperature of ceramic, the precise
                resistance of a hinge—these are the unspoken vocabulary of luxury.
              </p>
              <p>
                Value Tuning was designed for a lighting company, but its
                application extends to any brand that asks: How do we want to be
                remembered? Not through what people see, but through what they
                feel.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] bg-neutral-200 overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
              [Insert: Process Photo / Testing Setup]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}