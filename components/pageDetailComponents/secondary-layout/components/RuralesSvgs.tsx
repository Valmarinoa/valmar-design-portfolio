"use client";

import Image from "next/image";

export default function TotemicaSvgs() { 

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[130vw] h-44 overflow-hidden z-10 pointer-events-none ">
    <Image
        src="/media/rurales/mntn-bg.png"
        alt=""
        fill
        className="object-fill mt-10"
        priority
      />   
</div>
  );
}
