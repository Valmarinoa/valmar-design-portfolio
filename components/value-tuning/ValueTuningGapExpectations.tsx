"use client";

import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import { useState } from "react";
import ValueSpectrumChart from "./svgs/ValueSpectrumChart";
import ValueSpectrumChartHue from "./svgs/ValueSpectrumChartHue";
import ValueSpectrumChartApple from "./svgs/ValueSpectrumChartApple";
import ValueSpectrumChartIkea from "./svgs/ValueSpectrumChartIkea";
import type { ValueTuningContent } from "@/data/valueTuningMessages";

type Props = {
  content: ValueTuningContent["expectationGap"];
};

export default function ValueTuningExpectationGap({ content }: Props) {
  const [activeBrand, setActiveBrand] = useState("HUE");

  const brandToggles = [
    {
      id: "default",
      label: content.brandToggles[0].label,
      color: "#C1C1C1",
    },
    {
      id: "Brand A",
      label: content.brandToggles[1].label,
      color: "#76E897",
      icon: (
        <svg viewBox="0 0 80 24" className="h-5 w-auto">
          <rect x="0" y="8" width="60" height="8" rx="4" fill="#E8D5F2" stroke="#333" strokeWidth="0.5"/>
          <rect x="2" y="10" width="56" height="4" rx="2" fill="#C4A5E6"/>
          <path d="M60 12 L70 12" stroke="#333" strokeWidth="1"/>
          <circle cx="72" cy="12" r="2" fill="#333"/>
        </svg>
      ),
    },
    {
      id: "Brand B",
      label: content.brandToggles[2].label,
      color: "#F4C400",
      icon: (
        <svg viewBox="0 0 30 24" className="h-6 w-auto">
          <rect x="10" y="4" width="16" height="16" rx="8" fill="#F5F5F5" stroke="#999" strokeWidth="0.5"/>
          <circle cx="18" cy="12" r="4" fill="#E0E0E0"/>
          <circle cx="18" cy="12" r="2" fill="#666"/>
          <rect x="14" y="18" width="8" height="3" rx="1" fill="#F5F5F5" stroke="#999" strokeWidth="0.5"/>
        </svg>
      ),
    },
    {
      id: "Brand C",
      label: content.brandToggles[3].label,
      color: "#111111",
      icon: (
        <svg viewBox="0 0 64 24" className="h-6 w-auto">
          <ellipse cx="40" cy="14" rx="20" ry="8" fill="#333"/>
          <ellipse cx="40" cy="12" rx="18" ry="6" fill="#555"/>
          <circle cx="40" cy="10" r="3" fill="#777"/>
          <path d="M35 18 Q40 22 45 18" stroke="#333" strokeWidth="2" fill="none"/>
        </svg>
      ),
    },
  ];

  const renderChart = () => {
    switch (activeBrand) {
      case "Brand C":
        return <ValueSpectrumChartApple />;
      case "default":
        return <ValueSpectrumChart />;
      case "Brand B":
        return <ValueSpectrumChartIkea />;
      case "Brand A":
      default:
        return <ValueSpectrumChartHue />;
    }
  };

  return (
    <section
      id="expectation-gap"
      className="py-16 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <LineChart className="w-8 h-8 opacity-40" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase opacity-50">
                {content.label}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl mb-6">
              {content.heading}
            </h2>

            <div className="space-y-5 text-base leading-relaxed opacity-80">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>
          </motion.div>

          {/* BRAND TOGGLES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3 mt-12 mb-8"
          >
            {brandToggles.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(brand.id)}
                className={`group flex items-center gap-4 pr-4 rounded-full cursor-pointer border transition-all duration-300 w-fit ${
                  activeBrand === brand.id
                    ? "border-current"
                    : "border-neutral-200"
                }`}
                style={{
                  borderColor: activeBrand === brand.id ? brand.color : undefined,
                  boxShadow: activeBrand === brand.id
                    ? `0 4px 20px ${brand.color}40`
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 24px ${brand.color}50`;
                  e.currentTarget.style.borderColor = brand.color;
                }}
                onMouseLeave={(e) => {
                  if (activeBrand !== brand.id) {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e5e5e5";
                  } else {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${brand.color}40`;
                  }
                }}
              >
                {brand.id === "default" ? "" :
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: brand.color }}
                  />
                }
                <span className="text-sm font-medium text-neutral-800 text-left">
                  {brand.label}
                </span>
                <div className="flex-shrink-0 opacity-80 w-fit">
                  {brand.icon}
                </div>
              </button>
            ))}
          </motion.div>

          {/* CHART */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-8 min-w-0"
          >
            <div className="p-4 md:px-6 md:pt-8 md:pb-0 relative w-full">
              <div className="w-full min-w-0">
                {renderChart()}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0"
        >
          {content.brandSummaries.map((summary) => (
            <div key={summary.heading} className="border-t border-neutral-300 pt-6">
              <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">
                {summary.heading}
              </h4>
              <p className="text-sm leading-relaxed opacity-75">
                {summary.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
