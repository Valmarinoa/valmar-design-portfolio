"use client";

import { cubicBezier, motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function FadeIn({ children, className = "", delay = 0 }: Props) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}

            viewport={{ once: true, amount: 0.75 }}
            transition={{
                duration: .5,
                ease: cubicBezier(0.83, 0, 0.17, 1),
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}
