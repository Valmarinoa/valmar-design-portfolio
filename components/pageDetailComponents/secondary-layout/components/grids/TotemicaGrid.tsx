"use client";

import type { GridItem } from "@/types/project";
import FlexCell from "./cells/FlexCell";

type ThemeClasses = { border: string; text: string; bg: string; hex?: string, mobileModalBg: string };

export default function TotemicaGrid({
  items,
  theme,
  onOpen,
}: {
  items: GridItem[];
  theme: ThemeClasses;
  onOpen: (item: GridItem) => void;
}) {
  // safety for missing items
  if (!items?.length) return null;

  return (
    <div className={`mt-12 w-full border ${theme.border} relative z-40`}>
      <TwoUpRow left={items[0]} right={items[1]} onOpen={onOpen} theme={theme} />

      <div className={`relative aspect-3/4 border-y ${theme.border}`}>
        {items[2] ? <FlexCell item={items[2]} onOpen={() => onOpen(items[2])} fill /> : null}
      </div>

      <TwoUpRow left={items[3]} right={items[4]} onOpen={onOpen} theme={theme} />

      <div className={`relative h-96 border-t ${theme.border}`}>
        {items[5] ? <FlexCell item={items[5]} onOpen={() => onOpen(items[5])} fill /> : null}
      </div>
    </div>
  );
}

function TwoUpRow({
  left,
  right,
  onOpen,
  theme,
}: {
  left?: GridItem;
  right?: GridItem;
  onOpen: (item: GridItem) => void;
  theme: { border: string };
}) {
  return (
    <div className="flex">
      <div className={`w-1/2 border-r ${theme.border}`}>
        {left ? <FlexCell item={left} onOpen={() => onOpen(left)} /> : null}
      </div>
      <div className="w-1/2">
        {right ? <FlexCell item={right} onOpen={() => onOpen(right)} /> : null}
      </div>
    </div>
  );
}
