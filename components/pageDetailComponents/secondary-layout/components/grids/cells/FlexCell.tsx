"use client";

import Image from "next/image";
import type { GridItem } from "@/types/project";

export default function FlexCell({
  item,
  onOpen,
  fill = false,
}: {
  item: GridItem;
  onOpen: () => void;
  fill?: boolean;
}) {
  const wrapperClass = fill
    ? "relative w-full h-full"
    : item.mobileCellClassName ?? item.cellClassName ?? "relative";

  const imgClass =
    item.mobileImgClassName ?? item.imgClassName ?? "object-contain";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full h-full text-left"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className={`${wrapperClass} overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.alt ?? item.id}
          fill
          sizes="100vw"
          className={imgClass}
          draggable={false}
        />
      </div>
    </button>
  );
}
