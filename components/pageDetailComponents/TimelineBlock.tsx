"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { TimelineBlock as TimelineBlockType, TimelineItem } from "@/types/project";

type Props = {
  block: TimelineBlockType;
  onItemClick?: (item: TimelineItem) => void;
};

// Your timeline items were likely laid out for the old container height.
// Use that as the reference so everything scales proportionally on mobile/desktop.
const REFERENCE_HEIGHT_PX = 300;

// You previously scaled by 5%. Now +3% more => total 8% up from your base values.
const EXTRA_SCALE = 1.00;

function roundPx(n: number) {
  return Math.round(n);
}

export default function TimelineBlock({ block, onItemClick }: Props) {
  const {
    title,
    description,
    items,

    heightClassName = "",
    timelineHeightClassName = "",
    className = "",

    baselineAt = 0.62,

    canvasWidthPx,
    sidePaddingPx = 0,
    wheelToHorizontal = true,
  } = block;

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // ✅ Dock-like behavior: track mouse X over the viewport
  const mouseX = useMotionValue(Infinity);

  // ✅ bring hovered item to front
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // ✅ measure actual timeline height so items can scale responsively
  const [viewportHeight, setViewportHeight] = useState<number>(REFERENCE_HEIGHT_PX);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) setViewportHeight(h);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // ✅ scale factor based on real rendered height
  const scaleFactor = useMemo(() => {
    const base = viewportHeight / REFERENCE_HEIGHT_PX;
    return base * EXTRA_SCALE;
  }, [viewportHeight]);

  // ✅ scaled items (x/y/width/height all proportional)
  const scaledItems = useMemo(() => {
    return items.map((it) => ({
      ...it,
      x: roundPx(it.x * scaleFactor),
      y: it.y != null ? roundPx(it.y * scaleFactor) : it.y,
      width: roundPx(it.width * scaleFactor),
      height: roundPx(it.height * scaleFactor),
    }));
  }, [items, scaleFactor]);

  // Canvas grows based on right-most (scaled) item
  const computedCanvasWidth = useMemo(() => {
    if (canvasWidthPx) return canvasWidthPx;

    const maxRight = scaledItems.reduce(
      (acc, it) => Math.max(acc, it.x + it.width),
      0
    );

    const endPad = 240; // keep your existing end padding
    return Math.max(1200, maxRight + endPad);
  }, [scaledItems, canvasWidthPx]);

  const baselinePercent = Math.min(0.95, Math.max(0.05, baselineAt)) * 100;

  // ✅ Simple horizontal-only wheel:
  // - Only respond to horizontal gestures (deltaX dominates)
  // - Never map deltaY -> horizontal
  // - Otherwise let the page scroll normally
  useEffect(() => {
    if (!wheelToHorizontal) return;
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const ax = Math.abs(e.deltaX);
      const ay = Math.abs(e.deltaY);

      // Not primarily horizontal? Do nothing — allow normal page scroll (Y).
      if (ax <= ay) return;

      // Horizontal intent: keep it simple.
      e.preventDefault();
      el.scrollLeft += e.deltaX;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, [wheelToHorizontal]);

  return (
    <section className={`w-screen max-w-[1244px] relative px-6 ${heightClassName} ${className}`}>
     
        <div className="mx-auto w-full max-w-[1240px]">
  {(title || description) && (
    <div>
      {title ? (
        <h2 className="text-balance text-3xl md:text-4xl leading-snug text-neutral-900">
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className="
            mt-4 text-sm md:text-base leading-snug text-neutral-900
            max-w-none
            md:columns-2 md:gap-10
            [column-fill:balance]
            md:[orphans:3] md:[widows:3]
          "
        >
          {description}
        </p>
      ) : null}
    </div>
  )}

        {/* viewportRef measures this container height */}
        <div
          ref={viewportRef}
          className={`relative w-full h-[50vh] max-h-[700px] mb-20 ${timelineHeightClassName}`}
        >
          <motion.div
            ref={scrollerRef}
            className="relative h-full w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none]"
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Canvas */}
            <div
              className="relative h-full"
              style={{
                width: computedCanvasWidth,
                paddingLeft: sidePaddingPx,
                paddingRight: 120,
                // @ts-ignore
                ["--baseline" as any]: `${baselinePercent}%`,
              }}
            >
              {/* Baseline behind items */}
              <div
                className="absolute left-0 right-0 h-px bg-neutral-900/60"
                style={{ top: "var(--baseline)", zIndex: 0 }}
              />

              {scaledItems.map((it) => (
                <TimelineMediaItem
                  key={it.id}
                  item={it}
                  mouseX={mouseX}
                  isHovered={hoveredId === it.id}
                  onHoverStart={() => setHoveredId(it.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onItemClick={onItemClick}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineMediaItem({
  item,
  mouseX,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onItemClick,
}: {
  item: TimelineItem;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onItemClick?: (item: TimelineItem) => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const y = item.y ?? 0;
  const topExpr = `calc(var(--baseline) - ${item.height / 2}px + ${y}px)`;

  // Dock-like scale based on distance to mouse X
  const distance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || x === Infinity) return Infinity;
    return x - (rect.left + rect.width / 2);
  });

  const scaleRaw = useTransform(
    distance,
    [-260, -140, 0, 140, 260],
    [0.96, 1.02, 1.10, 1.02, 0.96]
  );

  const scale = useSpring(scaleRaw, { mass: 0.15, stiffness: 170, damping: 16 });

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onItemClick?.(item)}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="absolute text-left"
      style={{
        left: item.x,
        top: topExpr,
        width: item.width,
        height: item.height,
        zIndex: isHovered ? 50 : 10,
        scale,
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div className="relative h-full w-full">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            className="h-full w-full object-cover rounded-xs shadow-sm"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            sizes={`${item.width}px`}
            className="object-cover rounded-xs shadow-sm"
            draggable={false}
            priority={false}
          />
        )}

        {item.caption ? (
          <div className="absolute -top-5 right-0 z-60 flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-[2px] bg-neutral-900" />
            <span className="text-[11px] leading-none text-neutral-900">
              {item.caption}
            </span>
          </div>
        ) : null}
      </div>
    </motion.button>
  );
}
