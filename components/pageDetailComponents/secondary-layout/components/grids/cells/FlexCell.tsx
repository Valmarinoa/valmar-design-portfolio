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
      className="w-full h-full text-left relative"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className={`${wrapperClass} overflow-hidden `}>
        <Image
          src={item.src}
          alt={item.alt ?? item.id}
          fill
          sizes="100vw"
          className={imgClass}
          draggable={false}
        />
        
      </div>
      <div className="self-end absolute -bottom-px right-0">
        <div className="text-amber-500 p-2 text-right">
          <p>{item.ref ?? "ref. ###"}</p>
          <p className="text-xs font-light">{item.ref2 ?? "ref. ###"}</p>
          {item.woodType && (
            <p className="text-[10px] font-light opacity-70">{item.woodType}</p>
          )}
          {item.dimensions && (
            <p className="text-[10px] font-light opacity-70">{item.dimensions}</p>
          )}
          {item.status && (
            <p className="text-[10px] tracking-widest uppercase mt-0.5">
              {item.status === "available" ? "Available" : "Sold"}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
