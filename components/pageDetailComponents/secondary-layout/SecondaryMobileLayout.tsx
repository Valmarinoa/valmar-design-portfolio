"use client";

import type { GridItem } from "@/types/project";
import MobileHeroComponent from "./components/MobileHeroComponent";
import MobileGallery from "./components/MobileGallery";

type Props = {
  gridItems: GridItem[];
  title: string;
  tagLine?: string;
  description?: string;
  tags?: string[];
  mobileHeroImage?: string;
};

export default function SecondaryMobileLayout({
  title,
  tagLine,
  description,
  mobileHeroImage,
  gridItems,
}: Props) {
  return (
    <div className="w-full relative pt-10 z-40 flex flex-col py-24 px-4">
      <MobileHeroComponent
        title={title}
        tagLine={tagLine}
        description={description}
        mobileHeroImage={mobileHeroImage}
      />

      <MobileGallery gridItems={gridItems} />
    </div>
  );
}
