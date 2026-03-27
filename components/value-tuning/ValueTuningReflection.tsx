"use client";

import { motion } from "framer-motion";

export default function ValueTuningReflection() {
  return (
    <section id="reflection" className="relative py-16 px-6 md:px-12 m-12 mb-32 lg:px-24 text-white bg-neutral-950 rounded-4xl overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Reflection
            </span>
            <h2 className="text-3xl md:text-4xl mb-8">
              In an Increasingly Digital World
            </h2>
            <div className="space-y-6 text-base leading-relaxed opacity-80">
            <p> We encounter brands screen-first: through images, campaigns, and carefully constructed narratives, long before we ever touch the product itself. By the time it reaches our hands, expectation is already formed.
The first physical interaction is unforgiving. A lid's weight. The temperature of a material. The resistance of a hinge. These are not details — they are verdicts. In an instant, they confirm or quietly contradict everything a brand has claimed.
Working with Signify made this visceral: even the most sophisticated technology loses its value if the first touch feels wrong. In premium contexts, that gap between promise and sensation isn't perceived as nuance. It's felt as disappointment — and disappointment is expensive.
Value Tuning operates precisely at this point of tension. It translates brand narrative into tangible design decisions, identifying where perception breaks, where value is lost, and where it can be amplified. Across luxury, beauty, automotive, and consumer technology, the challenge is always the same: not only to design products that function, but to ensure they feel exactly as imagined — or better.
Because value is not communicated. It is verified — through the body.
When your product is finally held, will it justify everything that came before?</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-square bg-neutral-200 overflow-hidden rounded-4xl flex items-center justify-center"
          >
            <div className=" text-neutral-400 text-sm tracking-widest uppercase">
              [Insert: Process Photo / Testing Setup]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}