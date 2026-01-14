"use client";

import type { GridItem } from "@/types/project";
import FlexCell from "./cells/FlexCell";

type ThemeClasses = { border: string; text: string; bg: string; hex?: string };

export default function RuralesGrid({
  items,
  theme,
  onOpen,
}: {
  items: GridItem[];
  theme: ThemeClasses;
  onOpen: (item: GridItem) => void;
}) {
  if (!items?.length) return null;

  return (
    <div className={`mt-12 w-full border ${theme.border} relative z-40`}>
      {items.map((item, idx) => (
       <div
       key={item.id}
       className={[
         "relative w-full",
         idx !== 0 ? `border-t ${theme.border}` : "",
         item.mobileCellClassName ?? item.cellClassName ?? "h-[420px]",
       ].join(" ")}
     >
       <FlexCell item={item} onOpen={() => onOpen(item)} fill />
     </div>
     
      ))}
    </div>
  );
}
