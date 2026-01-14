"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    /** how early to mount before it enters (e.g. "300px") */
    rootMargin?: string;
};

export default function LazyMount({
    children,
    className = "",
    rootMargin = "300px",
}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { margin: rootMargin as any, once: true });
    const [mounted, setMounted] = useState(false);

    // Mount once we’re in view (or near it)
    if (inView && !mounted) setMounted(true);

    return (
        <div ref={ref} className={className}>
            {mounted ? children : null}
        </div>
    );
}
