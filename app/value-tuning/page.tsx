// app/value-tuning/page.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Granient from "@/components/animations/Granient";

import ValueTuningHero from "@/components/value-tuning/ValueTuningHero";
import ValueTuningProblem from "@/components/value-tuning/ValueTuningProblem";
import ValueTuningHypothesis from "@/components/value-tuning/ValueTuningHypothesis";
import ValueTuningSensoryProtocol from "@/components/value-tuning/ValueTuningSensoryProtocol";
import ValueTuningBlindfoldProtocol from "@/components/value-tuning/ValueTuningBlindfoldProtocol";
import SectionDivider from "@/components/value-tuning/SectionDivider";
import ValueTuningResearchFindings from "@/components/value-tuning/ValueTuningResearchFindings";
import ValueTuningFramework from "@/components/value-tuning/ValueTuningFramework";
import ValueTuningDesignCriteria from "@/components/value-tuning/ValueTuningDesignCriteria";
import ValueTuningImpact from "@/components/value-tuning/ValueTuningImpact";
import ValueTuningReflection from "@/components/value-tuning/ValueTuningReflection";
import ValueTuningSidebarNav from "@/components/value-tuning/ValueTuningSidebarNav";
import ValueTuningExpectationGap from "@/components/value-tuning/ValueTuningGapExpectations";


export default function ValueTuningCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen text-neutral-900">
      {/* <ValueTuningSidebarNav /> */}
      <div className="fixed inset-0 h-[100vh] w-full -z-10 will-change-transform">
        <Granient
          color1="#EBECE4"
          color2="#EBE5E3"
          color3="#99E1AD"
          timeSpeed={0.45}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-neutral-900 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <ValueTuningHero heroOpacity={heroOpacity} heroScale={heroScale} />
      <ValueTuningProblem />
      <ValueTuningHypothesis />
      <ValueTuningSensoryProtocol />
      <ValueTuningBlindfoldProtocol />
      <ValueTuningExpectationGap />
      <SectionDivider />
      <ValueTuningResearchFindings />
      <ValueTuningFramework />
      <SectionDivider />
      {/* <ValueTuningMethodology /> */}
      <ValueTuningDesignCriteria />
      <ValueTuningImpact />
      <ValueTuningReflection />
      {/* <ValueTuningFooter /> */}
    </main>
  );
}