"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { imageVariants, backdropVariants, buttonVariants } from "@/anim/animations";
import type { GridItem } from "@/types/project";
import { useTheme } from "@/components/providers/theme-context";
import TotemicaGrid from "./grids/TotemicaGrid";
import RuralesGrid from "./grids/RuralesGrid";

type Props = {
  gridItems: GridItem[];
};

export default function MobileGallery({ gridItems }: Props) {
  const { theme } = useTheme();
  const { themeKey } = useTheme();
  const items = useMemo(() => gridItems, [gridItems]);

  const [active, setActive] = useState<GridItem | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeModal = () => setActive(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
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

  const openItem = (it: GridItem) => setActive(it);

  return (
    <>
      {/* GRID AREA (only this swaps by theme) */}
      {themeKey === "rurales" ? (
        <RuralesGrid items={items} theme={theme} onOpen={openItem} />
      ) : (
        <TotemicaGrid items={items} theme={theme} onOpen={openItem} />
      )}
      {/* MODAL (shared) */}
{mounted && (
  <AnimatePresence initial={false} mode="sync">
    {active ? (
      <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop: clicking this closes */}
        <motion.div
          className={`absolute inset-0 backdrop-blur-3xl`}
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={closeModal}
          style={{ pointerEvents: "auto" }}
        />

        {/* Modal content: clicking inside should NOT close */}
        <motion.div
          className="relative z-1"
          onClick={(e) => e.stopPropagation()}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            width: "min(92vw, 560px)",
            height: "min(80vh, 680px)",
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={active.src}
              alt={active.alt ?? active.id}
              fill
              sizes="100vw"
              className={active.imgClassName ?? "object-contain"}
              priority
            />
            <div className={`${theme.bg} self-end absolute -bottom-px right-0`}>
              <p className={`${theme.text} px-px`}>{active.ref ?? "ref. ###"}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
)}

    </>
  );
}
