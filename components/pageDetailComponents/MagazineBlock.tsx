"use client";

import Image from "next/image";
import type { MagazineBlock as MagazineBlockType } from "@/types/project";

type Props = {
  block: MagazineBlockType;
};

function Media({
  src,
  type,
  alt,
  fit,
}: {
  src: string;
  type: "image" | "video";
  alt?: string;
  fit: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full ${fit}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt ?? ""}
          priority={false}
          fill
          className={`absolute inset-0 h-full w-full ${fit}`}
        />
      )}
    </div>
  );
}

export default function MagazineBlock({ block }: Props) {
  const {
    backgroundSrc,
    backgroundType,
    backgroundAlt,
    backgroundSrc2,
    backgroundType2,
    backgroundAlt2,
    text,
    maxHeightClassName,
    className = "",
    textClassName = "",
    imgFit = "object-cover",
    imgFit2 = "object-cover",
  } = block;

  const hasSecond = Boolean(backgroundSrc2);
  const secondType: "image" | "video" = backgroundType2 ?? "image";
  const secondFit = imgFit2 ?? imgFit;

  return (
    <section
      className={`
        w-screen max-w-[1244px]
        h-screen
        relative
        px-3
        ${className}
      `}
    >
      <div className="relative h-full w-full overflow-hidden md:max-h-[600px]">
        {/* ✅ Mobile: column. md+: row */}
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className={hasSecond ? "flex-1" : "w-full h-full"}>
            <Media src={backgroundSrc} type={backgroundType} alt={backgroundAlt} fit={imgFit} />
          </div>

          {hasSecond && backgroundSrc2 && (
            <div className="flex-1">
              <Media src={backgroundSrc2} type={secondType} alt={backgroundAlt2} fit={secondFit} />
            </div>
          )}
        </div>

        {text && (
          <div className="absolute bottom-8 right-8 z-10">
            <p className={`max-w-[360px] text-md leading-snug text-neutral-900 ${textClassName}`}>
              {text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
