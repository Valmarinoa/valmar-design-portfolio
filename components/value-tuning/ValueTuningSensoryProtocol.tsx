"use client";

import { motion } from "framer-motion";
import { sensoryProtocolSteps } from "@/data/valueTuning";
import Granient from "../animations/Granient";

export default function ValueTuningSensoryProtocol() {
  return (
    <section id="sensory-protocol" className="py-16 px-6 md:px-12 relative md:my-12 md:mx-24 text-white rounded-4xl overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
                  <Granient
                    color1="#1D1D1D"
                    color2="#301a4b"
                    color3="#301a4b"
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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
            The Protocol
          </span>
          <h2 className="text-3xl md:text-4xl mb-6">The Sensory Protocol</h2>
          <p className="text-base opacity-80 max-w-2xl leading-relaxed">
            I designed a research protocol that moves participants through three stages:
            expectation, sensory encounter, and reflection...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sensoryProtocolSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative"
            >
              <div className="mb-6 overflow-hidden rounded-2xl aspect-auto">
                {item.mediaType === "image" ? (
                  <img
                    src={item.mediaSrc}
                    alt={item.mediaAlt}
                    className={`w-full h-full ${
                      item.step === "01" ? "object-contain" : "object-cover"
                    }`}
                  />
                ) : (
                  <video
                    src={item.mediaSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                )}
              </div>

              <span className="text-xs tracking-widest opacity-40 mb-4 block">
                {item.step}
              </span>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-6">{item.desc}</p>

              <div className="pt-4 border-t border-neutral-300">
                <p className="text-xs italic opacity-60">{item.insight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}