"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/components/providers/theme-context";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  open: boolean;
  onClose: () => void;

  position?: "left" | "right";
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;

  accentColor?: string;
  isFixed?: boolean;

  /** still lets you close by clicking anywhere outside the panel */
  closeOnClickAway?: boolean;

  /** panel appearance */
  panelBgClassName?: string;

  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export default function StaggeredMenu({
  open,
  onClose,

  position = "right",
  items = [],
  socialItems = [],
  displaySocials = true,

  accentColor = "#5227FF",
  isFixed = true,
  closeOnClickAway = true,

  panelBgClassName = "bg-white/5 backdrop-blur-3xl",

  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) {
  const [mounted, setMounted] = useState(open);
  const { theme } = useTheme();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  // mount immediately when opening
  React.useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  // initial offscreen position
  useLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      if (!panel) return;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set(panel, { xPercent: offscreen });
    });

    return () => ctx.revert();
  }, [mounted, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[];

    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
    ) as HTMLElement[];

    const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];

    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: 0.65, ease: "power4.out" },
      0
    );

    if (itemEls.length) {
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        0.65 * 0.15
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            ["--sm-num-opacity" as any]: 1,
            stagger: { each: 0.08, from: "start" },
          },
          0.65 * 0.15 + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = 0.65 * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: "power2.out" }, socialsStart);

      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: "opacity" });
            },
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    const tl = buildOpenTimeline();
    tl?.play(0);
  }, [buildOpenTimeline]);

  const playClose = useCallback(
    (done?: () => void) => {
      openTlRef.current?.kill();
      openTlRef.current = null;

      const panel = panelRef.current;
      if (!panel) {
        done?.();
        return;
      }

      const offscreen = position === "left" ? -100 : 100;
      closeTweenRef.current?.kill();

      closeTweenRef.current = gsap.to(panel, {
        xPercent: offscreen,
        duration: 0.32,
        ease: "power3.in",
        overwrite: "auto",
        onComplete: () => {
          done?.();
        },
      });
    },
    [position]
  );

  // open/close reactions
  React.useEffect(() => {
    if (!mounted) return;

    if (open) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose(() => setMounted(false));
    }
  }, [open, mounted, playOpen, playClose, onMenuOpen, onMenuClose]);

  // click-away close (NO overlay element, just a document listener)
  React.useEffect(() => {
    if (!closeOnClickAway || !open || !mounted) return;

    const onPointerDown = (e: PointerEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) onClose();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [closeOnClickAway, open, mounted, onClose]);

  React.useEffect(() => {
    if (!open || !mounted) return;
  
    const body = document.body;
    const html = document.documentElement;
  
    // Save scroll position and existing inline styles
    const scrollY = window.scrollY;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
  
    // Lock scroll (works well across mobile/desktop)
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
  
    return () => {
      // Restore styles
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
  
      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, [open, mounted]);
  
  // ESC close
  React.useEffect(() => {
    if (!open || !mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`sm-scope ${isFixed ? "fixed inset-0" : "relative"} z-30 overflow-hidden pointer-events-none`}
      style={accentColor ? ({ ["--sm-accent" as any]: accentColor } as React.CSSProperties) : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      {/* Only the panel is clickable */}
      <aside
        ref={panelRef}
        className={`staggered-menu-panel pointer-events-auto absolute top-0 ${
          position === "left" ? "left-0" : "right-0"
        } h-full ${panelBgClassName} flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-xl`}
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="sm-panel-inner flex-1 flex flex-col gap-5">
          <ul
            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-5"
            role="list"
            // data-numbering={displayItemNumbering || undefined}
          >
            {items.map((it, idx) => (
              <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                <a
                  className={`sm-panel-item relative ${theme.text} font-semibold text-3xl cursor-pointer leading-none tracking-[-2px] uppercase inline-block no-underline pr-[1.4em]`}
                  href={it.link}
                  aria-label={it.ariaLabel}
                  onClick={onClose}
                >
                  <span className="sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform">
                    {it.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials mt-auto pt-8 flex flex-col gap-3" aria-label="Social links">
              <h3 className="sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]">
                Socials
              </h3>
              <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      <style>{`
        .sm-scope .staggered-menu-panel { width: clamp(260px, 38vw, 420px); }
        @media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; } }
        .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.1em;
          right: 3.2em;
          font-size: 18px;
          font-weight: 400;
          color: var(--sm-accent, #ff0000);
          opacity: var(--sm-num-opacity, 0);
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
