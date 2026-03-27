"use client";

import { motion } from "framer-motion";

const easeOutElegant = [0.22, 1, 0.36, 1] as const;

export default function AnimatedBlurb({ children }: { children: React.ReactNode }) {
  return (

    <motion.p 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.4, 
        ease: easeOutElegant,
        delay: 1.2 
      }}
      className="z-999 max-w-[650px] text-neutral-800 text-2xl leading-7"
    >
      {children}
    </motion.p>
  );
}