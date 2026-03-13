"use client";

import { motion } from "framer-motion";
import { lineReveal } from "@/anim/value-motion";

export default function SectionDivider() {
  return (
    <motion.div
      variants={lineReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-px bg-neutral-300 mx-6 md:mx-12 lg:mx-24 origin-left"
    />
  );
}