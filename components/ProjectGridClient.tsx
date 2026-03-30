"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { easeOutElegant } from "@/anim/animations";
import { Project } from "@/types/project";
import { useMemo, useRef, useState } from "react";

interface Props {
  projects: Project[];
  desktopBlurb: string;
  question?: string;
}

export default function ProjectGridClient({ projects, desktopBlurb, question }: Props) {
  const [activeFilter, setActiveFilter] = useState<"all" | "interface" | "strategy" | "material_object">("all");
  const gridTopRef = useRef<HTMLDivElement | null>(null);

  function scrollToGridTop() {
    const el = gridTopRef.current;
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleFilterChange(next: "all" | "interface" | "strategy" | "material_object") {
    if (next === activeFilter) return;
    scrollToGridTop();
    setActiveFilter(next);
  }

  function normalizePathSegment(value?: string | null) {
    if (!value) return "";
    // For external URLs, keep host + path as a stable id.
    if (/^https?:\/\//i.test(value)) {
      return value
        .replace(/^https?:\/\//i, "")
        .replace(/\/+$/, "")
        .split(/[?#]/)[0];
    }

    const stripped = value.replace(/^https?:\/\/[^/]+/i, "");
    return stripped.replace(/^\/+/, "").split(/[?#]/)[0];
  }

  function getStableProjectId(p: Project) {
    const slug = normalizePathSegment(p.slug);
    if (slug) return slug;
    const link = normalizePathSegment(p.link);
    if (link) return link;
    return p.title;
  }

  const highlightedIds = useMemo(() => {
    if (activeFilter === "all") return null;

    if (activeFilter === "interface") return new Set(["silence-of-blue", "tidal-light"]);
    if (activeFilter === "material_object") return new Set(["totemica", "rurales", "quiet-matter", "moonbar"]);
    return new Set(["value-tuning", "valenmarino.vercel.app"]);
  }, [activeFilter]);

  const orderedProjects = useMemo(() => {
    if (!highlightedIds) return projects;

    const highlighted: Project[] = [];
    const dimmed: Project[] = [];

    for (const p of projects) {
      const id = getStableProjectId(p);
      (highlightedIds.has(id) ? highlighted : dimmed).push(p);
    }

    // Stable within each group; highlighted occupy the top rows.
    return [...highlighted, ...dimmed];
  }, [highlightedIds, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: easeOutElegant
      }
    },
  };

  return (
    <section className="pt-14">
       <motion.h2 
        className="px-4 pb-10 w-full text-[26px] text-neutral-800 leading-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.2 }}
      >
       {question}
      </motion.h2>
      <motion.p 
        className="px-4 pb-10 w-full text-xl text-neutral-800 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.2 }}
      >
      {desktopBlurb}
      </motion.p>

      <div className="sticky top-[60px] z-30 px-4 pb-2 mt-10">
        <div className="flex flex-wrap justify-between gap-1  py-2">
          {([
            { id: "all", label: "All" },
            { id: "interface", label: "Interface" },
            { id: "strategy", label: "Strategy" },
            { id: "material_object", label: "Material & Object" },
          ] as const).map((opt) => {
            const selected = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleFilterChange(opt.id)}
                aria-pressed={selected}
                className={[
                  "rounded-full border px-3 py-2 text-[9px]  uppercase tracking-widest transition-colors",
                  selected
                    ? "bg-neutral-900 text-background border-neutral-900"
                    : "bg-transparent text-neutral-900 border-neutral-300 hover:border-neutral-900 backdrop-blur supports-backdrop-filter:bg-background/60",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
   
      {/* <div className="w-full flex px-4 text-[10px] text-center pb-6 font-light justify-evenly items-center"> 
          <p className="">Physical Objects</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>Low-Tech</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>LatinaAmerican <br/> Narrative</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>Savoir-faire <br/> Artesanal</p>
      </div> */}
      
      <div ref={gridTopRef} className="px-4 py-10 min-h-lvh">
        <motion.div
          className="grid grid-cols-2 gap-x-2 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          {orderedProjects.map((p) => {
            const key = getStableProjectId(p);
            const isHighlighted = !highlightedIds || highlightedIds.has(key);

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                layout
                animate={{
                  opacity: isHighlighted ? 1 : 0.18,
                  transition: { duration: 0.45, ease: easeOutElegant },
                }}
              >
                <ProjectCard
                  slug={p.slug}
                  link={p.link}
                  title={p.title}
                  image={p.thumbnail}
                  video={p.videoThumbnail ?? p.heroVideo}
                  description={p.tagline ?? p.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}