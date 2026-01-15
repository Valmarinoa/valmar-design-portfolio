"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/components/providers/theme-context";

type Props = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

export default function StaggeredMenuToggle({ open, onToggle, className }: Props) {
  const { theme } = useTheme();

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const h = plusHRef.current;
      const v = plusVRef.current;
      const icon = iconRef.current;
      if (!h || !v || !icon) return;

      gsap.set(h, { transformOrigin: "50% 50%", rotate: 0 });
      gsap.set(v, { transformOrigin: "50% 50%", rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
    });

    return () => ctx.revert();
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const h = plusHRef.current;
    const v = plusVRef.current;
    const icon = iconRef.current;
    if (!h || !v || !icon) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  React.useEffect(() => {
    animateIcon(open);
  }, [open, animateIcon]);

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={[
        "inline-flex items-center justify-center",
        theme.nav, 
        className ?? "",
      ].join(" ")}
    >
      <span
        ref={iconRef}
        className="relative w-[14px] h-[14px] inline-flex items-center justify-center [will-change:transform]"
        aria-hidden="true"
      >
        <span
          ref={plusHRef}
          className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
        />
        <span
          ref={plusVRef}
          className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
        />
      </span>
    </button>
  );
}
