"use client";
// don’t forget to import Fragment
import { Fragment } from "react"; import FadeIn from "../animations/FadeIn";
import MaskText from "../animations/MaskText";
import type { InspirationBlock } from "@/types/project";
import Image from "next/image";

type Props = {
    block: InspirationBlock;
};

export default function InspirationBlock({ block }: Props) {
    const { heading, intro, items } = block;

    return (
        <section className="w-full max-w-[1440px] px-3 md:px-6 flex flex-col items-center gap-10 md:gap-16">
            <div className="w-full flex justify-end">
                <div className="md:w-1/2 md:text-left flex flex-col">
                    <MaskText lineAs='h3' className="text-3xl md:text-4xl mb-4" text={heading} />

                    <p className="text-md md:text-base leading-snug text-left text-neutral-900 whitespace-pre-line"> {intro}  </p>

                </div>
            </div>
            <div className="grid gap-y-0.5 grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:w-2/3 w-full ">
                {/* Items: text left, small video/image right */}
                {items.map((item) => {
                    const isVideo = item.media.kind === "video";

                    return (
                        <Fragment key={item.title}>
                            {/* LEFT: label + copy */}
                            <div className="space-y-1 pr-4 text-md flex flex-col justify-center">
                                <p className="text-xl font-snug">{item.title}</p>
                                {item.subtitle && (
                                    <MaskText lineAs='p' className="text-base  text-neutral-900" text={item.subtitle} />


                                )}
                                
                                <p className="mt-1 text-xs  text-neutral-900 "> {item.body}  </p>
                            </div>

                            {/* RIGHT: media block */}
                            <div className="md:pl-16">
                                <div
                                    className="relative w-full aspect-video overflow-hidden rounded-xs"
                                >

                                    {isVideo ? (
                                        <video
                                            src={item.media.src}
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            preload="metadata"
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src={item.media.src}
                                            alt={item.media.alt ?? item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </Fragment>
                    );
                })}

            </div>

        </section>
    );
}



