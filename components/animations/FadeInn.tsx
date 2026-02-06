"use client";

import { motion } from "framer-motion";
import { easeOutElegant } from "@/anim/animations";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "section";
}

export default function FadeInn({ 
  children, 
  delay = 0, 
  duration = 1,
  direction = "up",
  className = "",
  as: Component = "div"
}: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -12 },
    none: { y: 0 }
  };

  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        ease: easeOutElegant, 
        delay 
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}