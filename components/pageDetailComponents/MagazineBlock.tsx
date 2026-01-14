"use client";

import Image from "next/image";
import type { MagazineBlock as MagazineBlockType } from "@/types/project";

type Props = {
  block: MagazineBlockType;
};

export default function MagazineBlock({ block }: Props) {
  const {
    backgroundSrc,
    backgroundType,
    backgroundAlt,
    text,
    maxHeightClassName,
    className = "",
    textClassName = "",
    imgFit = "object-cover",
  } = block;

  return (
    <section
      className={`
        w-screen max-w-[1244px]
        h-screen
        ${maxHeightClassName ?? ""}
        relative
        px-6
        ${className}
      `}
    >
      {/* ✅ relative + full size so media(fill-ish) respects it */}
      <div className="relative h-full w-full flex-1 overflow-hidden">
        {backgroundType ==="video" ? (
          <video
            src={backgroundSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full ${imgFit}`}
          />
        ) : (
          <Image
            src={backgroundSrc}
            alt={backgroundAlt ?? ""}
            fill
            className={imgFit}
            priority={false}
            sizes="(max-width: 1190px) 100vw, 1190px"
          />
        )}

        {/* Bottom-right text block */}
        <div className="absolute bottom-8 right-8 z-10">
          <p className={`max-w-[360px] text-md leading-snug text-neutral-900 ${textClassName}`}>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
