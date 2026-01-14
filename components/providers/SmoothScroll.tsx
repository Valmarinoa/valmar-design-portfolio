"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Respect reduced motion
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        if (prefersReduced) return;

        const lenis = new Lenis({
            autoRaf: true, // ✅ simplest + recommended
            lerp: 0.1,     // tweak feel (0.08–0.15 nice)
            smoothWheel: true,
            // smoothTouch: false, // keep default unless you want iOS smoothing too
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    // Optional but recommended: when navigating to another route,
    // force start at top to avoid “halfway down” state during navigation.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}
