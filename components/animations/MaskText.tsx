"use client";

import { cubicBezier, motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ElementType } from "react";

type MaskTextProps = {
    lines?: string[];
    text?: string;
    as?: ElementType;
    lineAs?: ElementType;
    className?: string;
    lineMaskClassName?: string;
    lineClassName?: string;
    duration?: number;
    stagger?: number;
    delay?: number; // optional base delay
};

export default function MaskText({
    lines,
    text,
    as: Wrapper = "div",
    lineAs: LineTag = "p",
    className = "",
    lineMaskClassName = "overflow-hidden",
    lineClassName = "",
    duration = 0.95,
    stagger = 0.09,
    delay = 0, // 👈 default = no delay
}: MaskTextProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.75 });

    const MotionLine = motion(LineTag as any);

    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({
            y: "0%",
            transition: {
                duration,
                ease: cubicBezier(0.83, 0, 0.17, 1),
                delay: delay + stagger * i, // 👈 base delay + stagger
            },
        }),
    };

    const computedLines =
        lines ??
        (typeof text === "string"
            ? text
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean)
            : []);

    if (!computedLines.length) return null;

    return (
        <Wrapper ref={ref} className={className}>
            {computedLines.map((line, index) => (
                <div key={index} className={lineMaskClassName}>
                    <MotionLine
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={inView ? "enter" : "initial"}
                        className={lineClassName}
                    >
                        {line}
                    </MotionLine>
                </div>
            ))}
        </Wrapper>
    );
}
