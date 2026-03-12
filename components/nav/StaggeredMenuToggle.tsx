"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

export default function StaggeredMenuToggle({ open, onToggle, className }: Props) {
  const rootRef = useRef<HTMLButtonElement | null>(null);
  const dotBLRef = useRef<HTMLSpanElement | null>(null);
  const dotBRRef = useRef<HTMLSpanElement | null>(null);
  const dotTRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bl = dotBLRef.current;
      const br = dotBRRef.current;
      const t = dotTRef.current;
      if (!bl || !br || !t) return;

      gsap.set([bl, br, t], {
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set(bl, { x: 0, y: 6, scale: 1, rotate: 0, opacity: 1 });
      gsap.set(br, { x: 10, y: 6, scale: 1, rotate: 0, opacity: 1 });
      gsap.set(t, { x: 5, y: 0, scale: 1, opacity: 1 });
    }, rootRef);

    return () => {
      tweenRef.current?.kill();
      ctx.revert();
    };
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const bl = dotBLRef.current;
    const br = dotBRRef.current;
    const t = dotTRef.current;
    if (!bl || !br || !t) return;

    tweenRef.current?.kill();

    tweenRef.current = opening
      ? gsap
          .timeline({ defaults: { ease: "power4.out", duration: 0.45 } })
          .to(t, { scale: 0, opacity: 0, duration: 0.18 }, 0)
          .to(bl, { scaleY: 5, rotate: 45, x: 5, y: 0 }, 0)
          .to(br, { scaleY: 5, rotate: -45, x: 5, y: 0 }, 0)
      : gsap
          .timeline({ defaults: { ease: "power3.inOut", duration: 0.32 } })
          .to([bl, br], { scaleY: 1, rotate: 0 }, 0)
          .to(bl, { x: 0, y: 6 }, 0)
          .to(br, { x: 10, y: 6 }, 0)
          .to(t, { scale: 1, opacity: 1, duration: 0.22 }, 0.08);
  }, []);

  React.useEffect(() => {
    animateIcon(open);
  }, [open, animateIcon]);

  return (
    <button
      ref={rootRef}
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={["inline-flex items-center justify-center w-8 h-8 pt-1 touch-manipulation", className ?? ""].join(" ")}
    >
      <span className="relative inline-block w-3 h-3" aria-hidden="true">
        <span ref={dotBLRef} className="absolute w-1.5 h-1.5 rounded-full bg-current will-change-transform" />
        <span ref={dotBRRef} className="absolute w-1.5 h-1.5 rounded-full bg-current will-change-transform" />
        <span ref={dotTRef} className="absolute w-1.5 h-1.5 rounded-full bg-current will-change-transform" />
      </span>
    </button>
  );
}