"use client";

import type { VideoBlock } from "@/types/project";

type Props = {
    block: VideoBlock;
};

export default function VideoBlock({ block }: Props) {
    const { caption, media } = block;

    return (
        <section className="w-full h-full relative max-w-[1440px] mx-auto">
            <div
                key={media.src}
                className="relative w-full overflow-hidden aspect-video"
            >

                <video
                    src={media.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    className="object-contain w-full"
                />


            </div>
            <p>{caption}</p>

        </section>
    );
}
