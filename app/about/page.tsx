'use client';

import Image from "next/image";
import { useTheme } from "@/components/providers/theme-context";
import { getMessages } from "@/data/messages";
import useLocale from "@/lib/use-locale";


export default function AboutPage() {
  const locale = useLocale();
  const messages = getMessages(locale);

  return (
    <main className="min-h-screen m-auto max-w-6xl w-full px-4 pb-16 pt-28 text-neutral-900">
      <div className="mx-auto w-full  flex gap-6 h-[50vh]">
        <div className="md:w-1/2 w-1/4 flex text-5xl md:text-6xl overflow-visible">
        <h2 className="leading-10">Valentina Marino</h2></div>
        <div className="md:w-1/2 flex-1 flex relative">
        <div className="aspect-square h-[50%] md:h-[60%] absolute bottom-0 left-0">
        <Image
              src="/media/me2.png"
              alt="About the creator"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width: 768px) 100vw, 100vw"
            />
        </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-neutral-900 my-10"/>
      <div className="mx-auto w-full  flex gap-6 h-[50vh]">
        <div className="md:w-1/2 w-1/4 flex tracking-widest text-[12px]">{messages.about.about.toUpperCase()}</div>
        <div className="md:w-1/2 flex-1 relative">
        <p className="text-sm">{messages.about.content}</p>
        </div>
      </div>
    </main>
  );
}
