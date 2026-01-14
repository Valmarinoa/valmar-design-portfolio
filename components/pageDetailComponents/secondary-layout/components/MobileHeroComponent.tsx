"use client";

import Image from "next/image";
import TotemicaSvgs from "./TotemicaSvgs";
import RuralesSvgs from "./RuralesSvgs";
import { useTheme } from "@/components/providers/theme-context";

type Props = {
  title: string;
  tagLine?: string;
  description?: string;
  mobileHeroImage?: string;
  className?: string;
};

export default function MobileHeroComponent({
  title,
  tagLine,
  description,
  mobileHeroImage,
  className = "",
}: Props) {
  const { themeKey, theme } = useTheme();

  return (
    <div className={className}>
      {mobileHeroImage ? (
        <div className="relative aspect-3/4 max-h-[510px] w-full">
          <Image
            src={mobileHeroImage}
            alt="hero image"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      ) : null}

      <div className="w-full pt-7 text-center flex flex-col justify-center z-40">
        <h1 className={`text-6xl font-bold text-center ${theme.text}`}>
          {title}
        </h1>
        {tagLine ? (
          <h3 className={`-mt-2 font-medium text-xl ${theme.text}`}>
            {tagLine}
          </h3>
        ) : null}
      </div>

      <div className={`flex flex-col gap-10 ${themeKey === "totemica" ? "mt-14" : ""}`}>
        {themeKey === "totemica" ? (
          <div className="w-full items-center flex justify-center">
            <TotemicaSvgs width={308} className="mx-auto" />
          </div>
        ) : (
          <RuralesSvgs />
        )}

        {description ? (
          <p className={`pt-4 w-full text-center leading-snug ${theme.text}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
