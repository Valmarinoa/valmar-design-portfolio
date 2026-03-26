"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { easeOutElegant } from "@/anim/animations";
import { Project } from "@/types/project";

interface Props {
  projects: Project[];
  desktopBlurb: string;
  question?: string;
}

export default function ProjectGridClient({ projects, desktopBlurb, question }: Props) {
    
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
    }
  };

  return (
    <section className="pt-14">
       <motion.h2 
        className="px-4 pb-10 w-full text-[26px] text-neutral-800"
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
   
      <div className="w-full flex px-4 text-[10px] text-center pb-6 font-light justify-evenly items-center"> 
          <p className="">Physical Objects</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>Low-Tech</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>LatinaAmerican <br/> Narrative</p>
          <div className="h-8 w-px bg-neutral-700"/>
          <p>Savoir-faire <br/> Artesanal</p>
      </div>
      
      <div className="px-4 py-10">
        <motion.div 
          className="grid grid-cols-2 gap-x-2 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={itemVariants}>
              <ProjectCard
                slug={p.slug}
                link={p.link}
                title={p.title}
                image={p.thumbnail}
                video={p.heroVideo}
                description={p.tagline ?? p.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}