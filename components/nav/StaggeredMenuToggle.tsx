"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

export default function StaggeredMenuToggle({ open, onToggle, className }: Props) {
  // Three dots positioned in a triangle (like your SVG)
  const dotBLRef = useRef<HTMLSpanElement | null>(null); // Bottom-left → becomes /
  const dotBRRef = useRef<HTMLSpanElement | null>(null); // Bottom-right → becomes \
  const dotTRef = useRef<HTMLSpanElement | null>(null);  // Top → fades out

  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  // Set initial positions (triangle formation matching your SVG proportions)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bl = dotBLRef.current;
      const br = dotBRRef.current;
      const t = dotTRef.current;
      if (!bl || !br || !t) return;

      // Initial: triangle formation (14px container scaled to match 71x66 viewBox ratios)
      gsap.set(bl, { 
        x: 0, 
        y: 6,           // ~65% down
        scale: 1, 
        rotate: 0,
        transformOrigin: "50% 50%",
        opacity: 1 
      });
      gsap.set(br, { 
        x: 10,          // ~70% across  
        y: 6,
        scale: 1,
        rotate: 0,
        transformOrigin: "50% 50%",
        opacity: 1 
      });
      gsap.set(t, { 
        x: 5,           // centered
        y: 0,           // top
        scale: 1,
        opacity: 1,
        transformOrigin: "50% 50%" 
      });
    });

    return () => ctx.revert();
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const bl = dotBLRef.current;
    const br = dotBRRef.current;
    const t = dotTRef.current;
    if (!bl || !br || !t) return;

    tweenRef.current?.kill();

    if (opening) {
      tweenRef.current = gsap
        .timeline({ defaults: { ease: "power4.out", duration: 0.5 } })
        .to(t, { scale: 0, opacity: 0, duration: 0.2 }, 0)
        .to(bl, { 
          scaleY: 5,      
          rotate: 45,
          x: 5,         
          y: 0,
          duration: 0.5 
        }, 0)
        .to(br, { 
          scaleY: 5,
          rotate: -45,
          x: 5,         
          y: 0,
          duration: 0.5 
        }, 0);
    } else {
      tweenRef.current = gsap
        .timeline({ defaults: { ease: "power3.inOut", duration: 0.35 } })
      
        .to([bl, br], { 
          scaleY: 1,
          rotate: 0,
          duration: 0.35 
        }, 0)
        .to(bl, { x: 0, y: 6 }, 0)
        .to(br, { x: 10, y: 6 }, 0)
        .to(t, { scale: 1, opacity: 1, duration: 0.25 }, 0.1);
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
        "inline-flex items-center justify-center w-10 h-10",
        className ?? "",
      ].join(" ")}
    >
      <span
        className="relative w-[14px] h-[14px] inline-block"
        aria-hidden="true"
      >
        {/* Three dots - each 4px to match proportions of your SVG circles */}
        <span
          ref={dotBLRef}
          className="absolute w-1 h-1 bg-current rounded-full [will-change:transform]"
        />
        <span
          ref={dotBRRef}
          className="absolute w-1 h-1 bg-current rounded-full [will-change:transform]"
        />
        <span
          ref={dotTRef}
          className="absolute w-1 h-1 bg-current rounded-full [will-change:transform]"
        />
      </span>
    </button>
  );
}