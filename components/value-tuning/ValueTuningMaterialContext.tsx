"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ValueTuningMaterialContext() {
  return (
    <section id="material-context" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-6">Material as Message</h2>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            Users categorize products instinctively based on tactile
            associations. The same plastic can read &quot;office&quot; or
            &quot;home&quot; depending on surface treatment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden rounded-sm">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                [Insert: Soft-Touch Integration]
              </div>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-green-700 block mb-2">
                Domestic Context
              </span>
              <h3 className="text-2xl mb-3">&quot;Something I Can Hold&quot;</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Seamless transitions between soft-touch fabric and hardware create
                objects that invite touch. Users describe these as
                &quot;something I can grab and play with&quot;—domestic, personal,
                home-worthy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden rounded-sm">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                [Insert: Hard Plastic Junction]
              </div>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-red-700 block mb-2">
                Industrial Context
              </span>
              <h3 className="text-2xl mb-3">
                &quot;Reminds Me of an Office&quot;
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Abrupt material transitions and hard plastic surfaces signal
                &quot;practical, not domestic.&quot; Users instinctively place
                these products aside rather than integrating them into their living
                spaces.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="p-8 md:p-12 border border-neutral-300 bg-white text-center"
        >
          <Quote className="w-8 h-8 opacity-20 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 font-baskervville-italic max-w-3xl mx-auto">
            &quot;This would be Volkswagen. There&apos;s Audi, which has everything
            a little bit better... but there&apos;s nothing wrong with
            Volkswagen.&quot;
          </blockquote>
          <p className="text-sm opacity-70 max-w-xl mx-auto leading-relaxed">
            Users intuitively categorize products into quality tiers. The key is
            consistency: Volkswagen feels &quot;okay&quot; because every touchpoint
            reinforces the same message. Inconsistency—premium sound but cheap
            feel—creates cognitive dissonance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}