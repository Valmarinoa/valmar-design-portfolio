"use client";

import type { GalleryBlock } from "@/types/project";
import Image from "next/image";

type Props = {
    block: GalleryBlock;
};

export default function GalleryBlock({ block }: Props) {
    const { media } = block;

    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-4xl flex gap-0.5">
                {media.map((item, i) => (
                    <div key={i} className="">
                        <Image
                            src={item.src}
                            alt={item.alt ?? ""}
                            width={400}
                            height={600}
                            className="object-cover h-fit"
                        />
                    </div>
                ))}
            </div>
        </section>

    );
}
