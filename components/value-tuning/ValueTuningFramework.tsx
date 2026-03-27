"use client";

import { motion } from "framer-motion";
import Granient from "@/components/animations/Granient";
import { frameworkParameters } from "@/data/valueTuning";

export default function ValueTuningFramework() {
  return (
    <section
      id="framework"
      className="scroll-mt-24 py-16 px-6 md:px-12 lg:px-24 bg-neutral-900 text-[#f5f4ed]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase block mb-4">
            The Framework
          </span>

          <h2 className="text-3xl md:text-4xl mb-6">
            Six Parameters of Perceived Value
          </h2>

          <p className="text-base opacity-80 max-w-2xl mx-auto">
            From the research, I distilled six measurable attributes that determine
            whether a product feels "premium" or "cheap," regardless of its price.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworkParameters.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.param}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-4xl"
              >
                {/* Gradient background */}
                <div className="absolute inset-0">
                  <Granient
                    color1={item.gradient[0]}
                    color2={item.gradient[1]}
                    color3={item.gradient[2]}
                    timeSpeed={0.2}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={3}
                    warpSpeed={1}
                    warpAmplitude={20}
                    blendAngle={0}
                    blendSoftness={0.1}
                    rotationAmount={200}
                    noiseScale={1.5}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.2}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {Icon && (
                    <div className="mb-5">
                      <Icon
                        className="w-10 h-10"
                        stroke="#f5f4ed"
                        fill="none"
                      />
                    </div>
                  )}

                  <h3 className="text-lg mb-3">{item.param}</h3>

                  <p className="text-sm opacity-70 leading-relaxed">
                    {item.insight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg italic opacity-80 max-w-3xl mx-auto">
            "Perceived quality is not the sum of individual sensory inputs, but
            their coherence."
          </p>
        </motion.div>
      </div>
    </section>
  );
}