"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const easeOutElegant = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [ {
    role: "Co-Founder & Creative Director",
    company: "Carmela Collective · Amsterdam",
    period: "2025 – present",
    desc: "Latin American music and culture collective. Event programming, cultural curation, community building.",
  },
  {
    role: "Independent Consultant",
    company: "Remote · Amsterdam",
    period: "present",
    desc: "Latin American music and culture collective. Event programming, cultural curation, community building.",
  },
  {
    role: "Front-End Developer",
    company: "Bravoure · Amsterdam",
    period: "2023 Sep – 2025 Sep",
    desc: "React, Next.js, TypeScript, Tailwind. Built complex UI systems for cultural and commercial clients. Design background gave aesthetic advantage.",
  },
  {
    role: "Front-End Developer",
    company: "Autofill Technologies / Routinely",
    period: "2022 Sep – 2023 Aug",
    desc: "React, TypeScript. Product development in startup environment.",
  }, {
    role: "Creative Research",
    company: "Random Studio · Amsterdam",
    period: "2020 Jan – 2020 Oct",
    desc: "Interdisciplinary creative research at a leading interactive studio. Bridged concept, culture, and technology.",
  },
  {
    role: "UX Research & Design Strategy",
    company: "Signify (Philips Lighting) · Eindhoven",
    period: "2018 Jan – 2019 Jan",
    desc: "Qualitative UX research, sensory design strategy, user perception studies. Foundation for Value Tuning methodology.",
  },
  {
    role: "BA Design",
    company: "Design Academy Eindhoven",
    period: "Graduated 2019",
    desc: "Research-based design exploring human perception, environmental systems, and sensory experience.",
  },
] as const;

const coreMethodology = [
  "Value Tuning",
  "Sensory Experience Research",
  "Cultural Strategy",
  "Creative Technology",
  "Brand Experience Design",
  "Qualitative UX Research",
  "React / Next.js",
  "TypeScript",
  "Three.js / GLSL",
  "Tailwind",
  "WebGL",
  "Figma/Design Systems",
] as const;

// const technical = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Three.js / GLSL",
//   "Tailwind",
//   "WebGL",
//   "Figma",
// ] as const;

const languages = [
  { name: "Spanish", level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 97 },
  { name: "French", level: "Fluent", pct: 90 },
  { name: "Dutch", level: "Basic", pct: 10 },
  { name: "Portuguese", level: "Professional", pct: 70 },
] as const;

const keyProjects = [
  {
    title: "Tidal Light",
    type: "Interactive Installation · Embassy of Water, Eindhoven 2019",
    desc: "Breath-controlled light dimming via microphone. Textured glass tiles responding to tidal movement metaphor.",
  },
  {
    title: "Silence of Blue",
    type: "Interactive Installation  · Dutch Design Week (DDW), Eindhoven 2019",
    desc: "Microphone-driven motor rotates LED antenna, casting a growing shadow in response to acoustic atmosphere of the space.",
  },
  {
    title: "Value Tuning",
    type: "Proprietary Research Methodology  · Signify, Eindhoven 2018",
    desc: "Framework mapping how material attributes, touch, weight, sound, finish, shape perceived brand value and emotional quality.",
  },
  {
    title: "Valmar Studio",
    type: "valmar.studio",
    desc: "Design & art portfolio. Experience research, cultural strategy, sensory design.",
  },
  {
    title: "Carmela Collective",
    type: "Amsterdam",
    desc: "Latin American music and cultural platform. Event programming and community building in the Netherlands.",
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

type ExperienceEntry = (typeof experience)[number];

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-[0.5px] border-neutral-900">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm">{entry.role}</span>
          <span className="text-[10px] tracking-widest opacity-50 shrink-0">{entry.period}</span>
        </div>
        <span className="text-xs opacity-50 mt-0.5 block">{entry.company}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutElegant }}
            className="overflow-hidden"
          >
            <p className="text-xs opacity-70 leading-relaxed pb-4">{entry.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type KeyProject = (typeof keyProjects)[number];

function ProjectItem({ project }: { project: KeyProject }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-[0.5px] border-neutral-900">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 text-left cursor-pointer flex justify-between"
        aria-expanded={open}
      >
        <div><span className="text-sm block">{project.title}</span>
        <span className="text-xs opacity-50 mt-0.5 block">{project.type}</span></div>
        
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutElegant }}
            className="overflow-hidden"
          >
            <p className="text-xs opacity-70 leading-relaxed pb-4">{project.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProfileSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 6 gap-y-10 pt-6">

      {/* LEFT COLUMN, Experience & Education */}
      <div className="md:pr-16">
        <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-2 ">
          Experience & Education
        </span>
        <div>
          {experience.map((entry) => (
            <ExperienceItem key={entry.company} entry={entry} />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN, Skills, Languages, Projects */}
      <div className="space-y-8 md:border-[0.5px] border-neutral-900 rounded-3xl md:px-6 md:py-10 border-0">

        {/* Core Methodology */}
        <div>
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-3">
            Technical Skills
          </span>
          <div className="flex flex-wrap gap-2">
            {coreMethodology.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase bg-neutral-100 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Technical */}
        {/* <div>
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-3">
            Technical
          </span>
          <div className="flex flex-wrap gap-2">
            {technical.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase bg-neutral-100 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}

        {/* Languages */}
        <div>
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-4">
            Languages
          </span>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs mb-2">
                  <span>{lang.name}</span>
                  <span className="opacity-50">{lang.level}</span>
                </div>
                <div className="h-[1px] bg-neutral-200">
                  <motion.div
                    className="h-full bg-neutral-900"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div>
          <span className="text-[10px] tracking-widest uppercase opacity-50 block mb-2">
            Key Projects
          </span>
          <div>
            {keyProjects.map((project) => (
              <ProjectItem key={project.title} project={project} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
