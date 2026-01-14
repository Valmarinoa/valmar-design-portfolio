"use client";

import * as React from "react";
import { motion } from "framer-motion";

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;

  mode?: "letters" | "words" | "block";
  stagger?: number;   // only for letters/words
  duration?: number;  // animation duration for each item (or block)
  y?: number;
  blur?: number;
};

export default function BlurText({
  text,
  delay = 0,
  className = "",
  as: Component = "p",
  mode = "letters",
  stagger = 0.08,     // ✅ match your original index*0.08
  duration = 0.3,     // ✅ match your original duration
  y = 5,
  blur = 10,
}: BlurTextProps) {
  const item = {
    hidden: { opacity: 0, filter: `blur(${blur}px)`, y },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  // ✅ Block mode (one animation)
  if (mode === "block") {
    return (
      <Component className={className} aria-label={text}>
        <motion.span
          initial="hidden"
          animate="show"
          variants={item}
          transition={{ delay, duration, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {text}
        </motion.span>
      </Component>
    );
  }

  // ✅ Letters/words mode with stagger
  const parts = mode === "words" ? text.split(" ") : text.split("");
  const joiner = mode === "words" ? " " : "";

  return (
    <Component className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        animate="show"
        transition={{ delayChildren: delay, staggerChildren: stagger }}
        style={{ display: "inline" }}
      >
        {parts.map((part, i) => (
          <motion.span
            key={i}
            variants={item}
            transition={{ duration, ease: "easeOut" }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {part}
            {i < parts.length - 1 ? joiner : ""}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
