"use client";

import { motion } from "framer-motion";

type Props = {
  label?: string;
  delay?: number;
  className?: string;
};

export default function ScrollIndicator({
  label = "Scroll",
  delay = 1.2,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${className}`}
    >
      <span className="text-xs tracking-widest uppercase">{label}</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-px h-12 bg-neutral-900"
      />
    </motion.div>
  );
}
