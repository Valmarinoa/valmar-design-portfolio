"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  tagsContainer,
  tagItem,
  imageVariants,
  backdropVariants,
} from "@/anim/animations";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import BlurText from "@/components/animations/BlurText";
import type { GridItem } from "@/types/project";
import TotemicaSvgs from "./components/TotemicaSvgs";
import FadeIn from "@/components/animations/FadeIn";
import { useTheme } from "@/components/providers/theme-context";
import RuralesSvgs from "./components/RuralesSvgs";

type Props = {
  gridItems: GridItem[];
  title: string;
  tagLine?: string;
  description?: string;
  tags?: string[];
};

const REFERENCE_HEIGHT_PX = 400;
const EXTRA_SCALE = 1.0;

function roundPx(n: number) {
  return Math.round(n);
}

export default function SecondaryDesktopLayout({
  gridItems,
  title,
  description,
  tagLine,
  tags,
}: Props) {
  const items = useMemo(() => gridItems, [gridItems]);
  const { themeKey, theme } = useTheme();
  const [active, setActive] = useState<GridItem | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeModal = () => setActive(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  const mouseX = useMotionValue(Infinity);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportHeight, setViewportHeight] = useState<number>(
    REFERENCE_HEIGHT_PX
  );

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

  const scaleFactor = useMemo(() => {
    const base = viewportHeight / REFERENCE_HEIGHT_PX;
    return base * EXTRA_SCALE;
  }, [viewportHeight]);

  return (
    <section
      className={`w-full flex flex-col h-fit pt-20 md:pt-32 overflow-hidden ${theme.text}`}
    >
      <div className="md:flex-row flex flex-col px-6">
        <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 px-3 gap-1 md:gap-0">
          <BlurText
            as="h2"
            text={title}
            delay={1.4}
            mode="words"
            className="w-full font-semibold text-5xl md:text-6xl text-left md:pb-3"
          />

          {tagLine && (
            <BlurText
              as="h3"
              text={tagLine}
              delay={1.4}
              mode="words"
              className={`w-full text-xl md:text-2xl text-left leading-4 ${theme.text}`}
            />
          )}
        </div>

        <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 gap-4 pt-4 md:pt-4 px-3">
          {description && (
            <BlurText
              as="h3"
              text={description}
              delay={2}
              mode="block"
              className="w-full text-sm md:text-2xl text-left leading-snug"
            />
          )}

          {tags?.length ? (
            <motion.div
              className="flex flex-wrap gap-1 md:gap-4"
              variants={tagsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              {tags.map((tag) => (
                <motion.p
                  key={tag}
                  variants={tagItem}
                  className={`border z-40 opacity-70 ${theme.border} text-[9px] text-xs rounded-full px-3 pt-1 pb-0.5 whitespace-nowrap`}
                >
                  {tag.toUpperCase()}
                </motion.p>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>

      <div
        ref={viewportRef}
        className="
          relative mt-18 mb-20 h-[44vh] min-h-[400px] w-full
          overflow-x-auto overflow-y-visible
          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <motion.div
          className="flex h-full w-max flex-nowrap items-stretch gap-0 overflow-visible"
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {items.map((i, idx) => (
            <DockCarouselItem
              key={i.id}
              item={i}
              idx={idx}
              mouseX={mouseX}
              onClick={() => setActive(i)}
              scaleFactor={scaleFactor}
            />
          ))}
        </motion.div>
      </div>
{themeKey === "totemica" ?
(
      <div className="w-full items-end flex justify-end fixed bottom-4 right-8">
        <TotemicaSvgs width={178} className="block" />
      </div>
):(
  <RuralesSvgs />
)
}
      {mounted && (
        <AnimatePresence initial={false} mode="sync">
          {active ? (
            <motion.div
              className="fixed inset-0 z-999 flex items-center justify-center backdrop-blur-2xl"
              onClick={closeModal}
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={`absolute inset-0 ${theme.bg}`} />

              <motion.div
                className={`relative z-1 rounded-lg ${theme.bg}`}
                onClick={(e) => e.stopPropagation()}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  width: "min(76vw, 980px)",
                  height: "min(78vh, 760px)",
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center px-10">
                  <div className="relative w-full h-full max-w-[600px]">
                    <Image
                      src={active.src}
                      alt={active.alt ?? active.id}
                      fill
                      sizes="(max-width: 1024px) 90vw, 600px"
                      className={`object-contain ${active.imgClassName ?? ""}`}
                      priority
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </section>
  );
}

function DockCarouselItem({
  item,
  idx,
  mouseX,
  onClick,
  scaleFactor,
}: {
  item: GridItem;
  idx: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  onClick: () => void;
  scaleFactor: number;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const distance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || x === Infinity) return Infinity;
    return x - (rect.left + rect.width / 2);
  });

  const scaleRaw = useTransform(
    distance,
    [-240, -120, 0, 120, 240],
    [0.92, 1.02, 1.12, 1.02, 0.92]
  );

  const scale = useSpring(scaleRaw, {
    mass: 0.15,
    stiffness: 160,
    damping: 14,
  });

  const base = item.baseWidthPx ?? 230;
  let laneWidth = roundPx(base * scaleFactor);

  if (item.minWidthPx != null) laneWidth = Math.max(laneWidth, item.minWidthPx);
  if (item.maxWidthPx != null) laneWidth = Math.min(laneWidth, item.maxWidthPx);

  return (
    <div
      className="relative h-full shrink-0 overflow-visible"
      style={{ width: laneWidth }}
    >
      <FadeIn
        delay={2.5 + idx * 0.1}
        className="relative h-full w-full overflow-visible"
      >
        <motion.button
          ref={ref}
          type="button"
          onClick={onClick}
          className="relative h-full w-full text-left group overflow-visible"
          style={{
            scale,
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <Image
            src={item.src}
            alt={item.alt ?? item.id}
            fill
            className={`object-contain ${item.imgClassName ?? ""}`}
            priority={idx < 2}
            draggable={false}
          />
        </motion.button>
      </FadeIn>
    </div>
  );
}
