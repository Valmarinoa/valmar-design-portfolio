// components/pageDetailComponents/MediaTextBlock.tsx
"use client";

import type { MediaTextBlock } from "@/types/project";
import Image from "next/image";
import MaskText from "../animations/MaskText";
import FadeIn from "../animations/FadeIn";

type Props = {
    block: MediaTextBlock;
};

export default function MediaTextBlock({ block }: Props) {
    const { media, text, reverse, title, subtitle } = block;

    const isYouTube =
        media.src.includes("youtube.com") || media.src.includes("youtu.be");

    return (
        <section
            className={`w-full flex flex-col md:flex-row items-center justify-center gap-8  max-w-[1440px] ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* MEDIA */}
            <div className="w-full  md:w-2/3">
                <div className="relative w-full aspect-video overflow-hidden rounded-xs" >
                    {media.kind === "video" ? (
                        isYouTube ? (
                            <iframe
                                src={media.src}
                                title={media.alt ?? ""}
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <video
                                src={media.src}
                                muted
                                controls
                                autoPlay
                                loop
                                playsInline
                                preload="metadata"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        )
                    ) : (
                        <Image
                            src={media.src}
                            alt={media.alt ?? ""}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/3 text-left text-neutral-900 flex flex-col px-4 md:px-0">
                { title && <MaskText lineAs='h3' className="text-3xl md:text-4xl pb-4" text={title} />}
                { subtitle && <MaskText lineAs='p' className="opacity-70 text-xs pb-4" text={subtitle} /> }
                { text && <p className="text-md md:text-base"> {text}</p>}
            </div>
        </section>
    );
}
