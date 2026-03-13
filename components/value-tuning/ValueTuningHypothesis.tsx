"use client";

import { motion } from "framer-motion";

type Props = {
  youtubeId?: string;
  videoSrc?: string;
};

export default function ValueTuningHypothesis({ youtubeId, videoSrc }: Props) {
  return (
    <section id="hypothesis" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Research Premise
            </span>

            <h2 className="text-3xl md:text-4xl mb-6">
              The Value Spectrum
            </h2>

            <div className="space-y-6 text-base opacity-80 leading-relaxed max-w-2xl">
              <p>
                I proposed that there is a measurable distance between what people{" "}
                <em>expect</em> from a brand and what they actually <em>feel</em>{" "}
                when encountering its products through the senses.
              </p>

              <p>
                This gap becomes visible in the moment where brand narrative meets
                embodied experience: in the weight of an object, the resistance of
                a hinge, the texture of a surface, the sound of opening, the order
                of packaging.
              </p>

              <p>
                When expectation and sensory experience align, trust is reinforced.
                When they diverge, disappointment emerges. Brand value, then, does
                not live in image alone, but in the relationship between promise
                and perception.
              </p>

              <p className="text-sm font-medium opacity-90">
                In other words, value exists on a spectrum between projection and
                embodied reality.
              </p>
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-7 "
          >
            <div className="rounded-3xl border border-neutral-300 bg-white overflow-hidden">
              
              <div className="aspect-video w-full bg-neutral-100">
              
              <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/GA70QZ978q8"
  title="Research methodology trailer"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
                
              </div>

              <div className="p-4 border-t border-neutral-200">
                <p className="text-[10px] tracking-widest uppercase opacity-50 mb-2">
                  Methodology Trailer
                </p>

                <p className="text-sm opacity-70 leading-relaxed max-w-xl">
                  A short introduction to the research method: mapping brand
                  expectations, removing visual bias, and evaluating products
                  through touch, sound, weight, and material interaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COMPARISON CARD */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="p-8 md:p-12 border border-neutral-300 bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg mb-3">Expectation &gt; Reality</h4>

              <p className="text-sm opacity-70 leading-relaxed mb-3">
                A brand signals premium value, but the sensory experience
                reveals weak materials, awkward packaging, or imprecise
                construction.
              </p>

              <p className="text-xs italic opacity-50">
                Result: cognitive dissonance and reduced trust.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-3">Reality &gt; Expectation</h4>

              <p className="text-sm opacity-70 leading-relaxed mb-3">
                A product appears ordinary but delivers satisfying tactile,
                acoustic, and material quality when handled.
              </p>

              <p className="text-xs italic opacity-50">
                Result: delight, memorability, and stronger brand attachment.
              </p>
            </div>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}