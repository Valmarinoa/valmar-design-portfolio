"use client";

import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";

export default function ValueTuningBlindfoldProtocol() {
  return (
    <section id="blindfold-protocol" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <EyeOff className="w-8 h-8 opacity-40" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase opacity-50">
                The Method
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">
              The Blindfold Protocol
            </h2>
            <p className="text-xs opacity-60 italic leading-relaxed">
              &quot;The senses are not merely passive receptors of information but
              active participants in the construction of reality.&quot;
            </p>
            <p className="text-xs opacity-40 mt-2">
              — David Howes, The Empire of the Senses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-6 text-base leading-relaxed opacity-80">
              <p>
                Visual branding wields immense power. A logo, a color palette, a
                carefully staged photograph—these elements prime our expectations
                before we ever touch a product. But this priming is also a
                distortion. When we see a luxury brand&apos;s packaging, we are not
                experiencing the object; we are experiencing the <em>narrative</em>{" "}
                we have been conditioned to associate with it.
              </p>
              <p>
                The blindfold protocol removes this variable. By excluding sight, we
                access what David Howes calls the &quot;sensory order&quot;—the
                hierarchy of perception that operates beneath conscious brand
                recognition. Touch becomes primary. Sound becomes information.
                Temperature, weight, and texture speak without the interference of
                visual bias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  Visual Bias
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  Logo recognition triggers pre-conditioned quality associations. We
                  judge what we expect, not what we feel.
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  Narrative Conditioning
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  Brand storytelling creates a &quot;halo effect&quot; that masks
                  sensory inconsistencies. The eye forgives what the hand cannot.
                </p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                  Proximal Truth
                </h4>
                <p className="text-sm leading-relaxed opacity-70">
                  Objects close to the body—held, touched, manipulated—are judged by
                  different criteria than objects viewed from distance.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#76E897] mt-8">
              <p className="text-lg leading-relaxed italic opacity-90 text-center">
                &quot;What feels like home? What invites the hand to linger? These
                questions cannot be answered through visual analysis alone. The
                blindfold reveals the gap between what a brand promises and what a
                product actually delivers to the senses.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}