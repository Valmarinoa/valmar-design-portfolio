"use client";

import StaticGradient from "@/components/animations/StaticGradient";

import ValueTuningHero from "@/components/value-tuning/ValueTuningHero";
import ValueTuningProblem from "@/components/value-tuning/ValueTuningProblem";
import ValueTuningHypothesis from "@/components/value-tuning/ValueTuningHypothesis";
import ValueTuningSensoryProtocol from "@/components/value-tuning/ValueTuningSensoryProtocol";
import ValueTuningBlindfoldProtocol from "@/components/value-tuning/ValueTuningBlindfoldProtocol";
import SectionDivider from "@/components/value-tuning/SectionDivider";
import ValueTuningResearchFindings from "@/components/value-tuning/ValueTuningResearchFindings";
import ValueTuningFramework from "@/components/value-tuning/ValueTuningFramework";
import ValueTuningDeliverable from "@/components/value-tuning/ValueTuningDeliverable";
import ValueTuningFit from "@/components/value-tuning/ValueTuningFit";
import ValueTuningImpact from "@/components/value-tuning/ValueTuningImpact";
import ValueTuningReflection from "@/components/value-tuning/ValueTuningReflection";
import ValueTuningExpectationGap from "@/components/value-tuning/ValueTuningGapExpectations";
import ValueTuningService from "@/components/value-tuning/ValueTuningService";
import useLocale from "@/lib/use-locale";
import { getValueTuningContent } from "@/data/valueTuningMessages";
import ValueTuningSidebarNav from "@/components/value-tuning/ValueTuningSidebarNav";


export default function ValueTuningCaseStudy() {
  const locale = useLocale();
  const content = getValueTuningContent(locale);

  return (
    <main className="min-h-screen text-neutral-900 relative overflow-x-hidden">
     <div className="hidden md:block"><ValueTuningSidebarNav /></div>
      <div className="fixed inset-0 w-screen min-h-screen -z-10 pointer-events-none">
        <StaticGradient color1="#EBECE4" color2="#EBE5E3" color3="#99E1AD" />
      </div>

      <ValueTuningHero content={content.hero} />
      <ValueTuningProblem content={content.problem} />
      <ValueTuningHypothesis content={content.hypothesis} />
      <ValueTuningSensoryProtocol content={content.sensoryProtocol} />
      <ValueTuningBlindfoldProtocol content={content.blindfoldProtocol} />
      <ValueTuningExpectationGap content={content.expectationGap} />
      <SectionDivider />
      <ValueTuningResearchFindings content={content.researchFindings} />
      <ValueTuningFramework content={content.framework} />
      <ValueTuningDeliverable content={content.deliverable} />
      <ValueTuningImpact content={content.impact} />
      <ValueTuningFit content={content.fit} />
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
