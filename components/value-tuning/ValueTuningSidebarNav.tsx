"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionItem = {
  id: string;
  label: string;
};

const sections: SectionItem[] = [
  { id: "hero", label: "Intro" },
  { id: "problem", label: "The Brief" },
  { id: "hypothesis", label: "The Hypothesis" },
  { id: "sensory-protocol", label: "The Sensory Protocol" },
  { id: "blindfold-protocol", label: "The Blindfold Protocol" },
  { id: "research-findings", label: "Research Findings" },
  { id: "framework", label: "Framework" },
  // { id: "material-context", label: "Material Context" },
  // { id: "methodology", label: "Methodology" },
  { id: "design-criteria", label: "Design Criteria" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

export default function ValueTuningSidebarNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(false);

  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.35);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40"
          aria-label="Case study section navigation"
        >
          <div className="rounded-2xl border border-neutral-300/80 bg-white/70 backdrop-blur-md px-4 py-5 shadow-sm">
            <div className="mb-4">
              <p className="text-[10px] tracking-[0.22em] uppercase opacity-45">
                On this page
              </p>
            </div>

            <nav>
              <ul className="flex flex-col gap-3">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-3 text-left"
                      >
                        <span className="relative block h-[1px] w-6 overflow-hidden bg-neutral-300">
                          <motion.span
                            className="absolute inset-y-0 left-0 bg-neutral-900"
                            initial={false}
                            animate={{
                              width: isActive ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.35 }}
                          />
                        </span>

                        <span
                          className={`text-xs leading-none transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-45 group-hover:opacity-80 group-hover:translate-x-0.5"
                          }`}
                        >
                          {section.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}