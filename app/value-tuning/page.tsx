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
import ValueTuningExpectationGap from "@/components/value-tuning/ValueTuningGapExpectations";
import ValueTuningService from "@/components/value-tuning/ValueTuningService";
import LogoSvg from "@/components/svg/LogoSvg";
import useLocale from "@/lib/use-locale";
import { getValueTuningContent } from "@/data/valueTuningMessages";


export default function ValueTuningCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const content = getValueTuningContent(locale);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen text-neutral-900 relative overflow-x-hidden">
      {/* <ValueTuningSidebarNav /> */}
      <div className="fixed inset-0 w-screen min-h-screen -z-10">
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

      <ValueTuningHero heroOpacity={heroOpacity} heroScale={heroScale} content={content.hero} />
      <ValueTuningProblem content={content.problem} />
      <ValueTuningHypothesis content={content.hypothesis} />
      <ValueTuningSensoryProtocol content={content.sensoryProtocol} />
      <ValueTuningBlindfoldProtocol content={content.blindfoldProtocol} />
      <ValueTuningExpectationGap content={content.expectationGap} />
      <SectionDivider />
      <ValueTuningResearchFindings content={content.researchFindings} />
      <ValueTuningFramework content={content.framework} />
      <SectionDivider />
      {/* <ValueTuningMethodology /> */}
      <ValueTuningDesignCriteria content={content.designCriteria} />
      <ValueTuningImpact content={content.impact} />
      <ValueTuningReflection content={content.reflection} />
      <ValueTuningService content={content.service} />
      <div className="w-full items-center justify-center pb-16 flex flex-col gap-8 mt-20 px-6 opacity-80">
        <p className="text-xs text-center">
          {content.footer.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>
      </div>
    </main>
  );
}
