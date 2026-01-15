"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

  /** panel appearance (tint/border only – blur handled inline for iOS reliability) */
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

  // tint/border only; blur is inline
  panelBgClassName = "",

  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(open);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  // Portal container (fixes iOS backdrop-filter inconsistencies across routes)
  React.useEffect(() => {
    const el = document.createElement("div");
    el.setAttribute("data-staggered-menu-portal", "true");
    document.body.appendChild(el);
    setPortalEl(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

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
    const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];

    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
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
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = 0.65 * 0.4;

      if (socialTitle) {
        tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: "power2.out" }, socialsStart);
      }

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

  // ✅ Lock background scroll while open (mobile + iOS, no white flash)
  React.useEffect(() => {
    if (!open || !mounted) return;

    const body = document.body;
    const html = document.documentElement;

    const scrollY = window.scrollY;

    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyLeft = body.style.left;
    const prevBodyRight = body.style.right;
    const prevBodyWidth = body.style.width;
    const prevBodyOverflow = body.style.overflow;

    const prevHtmlOverflow = html.style.overflow;

    const prevBodyBg = body.style.backgroundColor;
    const prevHtmlBg = html.style.backgroundColor;

    const computedBodyBg = window.getComputedStyle(body).backgroundColor;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    body.style.backgroundColor = computedBodyBg;
    html.style.backgroundColor = computedBodyBg;

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;

      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.left = prevBodyLeft;
      body.style.right = prevBodyRight;
      body.style.width = prevBodyWidth;

      body.style.backgroundColor = prevBodyBg;
      html.style.backgroundColor = prevHtmlBg;

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

  if (!mounted || !portalEl) return null;

  const ui = (
    <div
      className={`sm-scope ${isFixed ? "fixed inset-0" : "relative"} z-9996 overflow-hidden pointer-events-none`}
      style={accentColor ? ({ ["--sm-accent" as any]: accentColor } as React.CSSProperties) : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <aside
        ref={panelRef}
        className={`staggered-menu-panel pointer-events-auto absolute top-0 ${
          position === "left" ? "left-0" : "right-0"
        } h-full ${panelBgClassName} flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10`}
        style={{
          // frosted glass
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          backgroundColor: "rgba(255,255,255,0.08)",

          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="sm-panel-inner flex-1 flex flex-col gap-5">
          <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-5" role="list">
            {items.map((it, idx) => (
              <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                <a
                  className={`sm-panel-item relative ${theme.text} font-semibold text-3xl cursor-pointer leading-none tracking-[-2px] uppercase inline-block no-underline pr-[1.4em]`}
                  href={it.link}
                  aria-label={it.ariaLabel}
                  onClick={onClose} // ✅ closes menu after navigating
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
              <ul
                className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                role="list"
              >
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sm-socials-link text-[1.2rem] ${theme.text} no-underline relative inline-block py-[2px]`}
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
      `}</style>
    </div>
  );

  return createPortal(ui, portalEl);
}
