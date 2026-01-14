"use client";

import type { TextTripticBlock } from "@/types/project";
import Image from "next/image";
import MaskText from "../animations/MaskText";

type Props = {
    block: TextTripticBlock;
};

export default function TextTripticBlock({ block }: Props) {
    const { title, body, subtitle, media } = block;

    const hasCopy = Boolean(title || body);

    return (
        <section className="w-full max-w-[1440px] text-neutral-900">
            <div className="mx-auto flex flex-col gap-10 md:gap-16">

                {/* TITLE + BODY (optional) */}
                {hasCopy && (
                    <div className="w-full flex justify-end px-4 md:px-0">
                        <div className="w-full md:w-2/3 md:text-left">
                            {title && (
                                <>
                                { title && <MaskText lineAs='h3' className="text-3xl md:text-4xl pb-4" text={title} /> }
                               { subtitle && <MaskText lineAs='p' className="opacity-70 text-xs pb-6" text={subtitle} /> }
                                </>
                            )}
                            {body && (
                                <p className="text-md md:text-base" > {body}  </p>
                            )}
                        </div>
                    </div>
                )}

                {/* MEDIA GRID – ALWAYS RENDERS */}
                <div
                    className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-3
                        gap-0.5
                        auto-rows-fr
                    "
                >
                    {media?.map((item) => {
                        const isVideo =
                            item.kind === "video" ||
                            item.src.toLowerCase().endsWith(".mp4");
                        return (
                            <div
                                key={item.src}
                                className={`relative w-full overflow-hidden ${item.aspect} h-fit`}
                            >
                                {isVideo ? (
                                    <video
                                        src={item.src}
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className={`absolute inset-0 h-full w-full ${item.fit} object-top`}
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt ?? ""}
                                        fill
                                        className={`${item.fit}`}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
