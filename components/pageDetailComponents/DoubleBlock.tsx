"use client";

import type { DoubleBlock } from "@/types/project";
import Image from "next/image";

type Props = {
    block: DoubleBlock;
};

export default function DoubleBlock({ block }: Props) {
    const { media } = block;

    return (
        <section className="w-full max-w-[1244px] h-screen max-h-[700px] px-6">
            <div className="md:w-full flex space-x-0.5 rounded-xs h-full">
                {media.map((item) => {
                    const isVideo = item.kind === "video";
                    const aspect = item.aspect ?? "";
                    const fit = item.fit ?? "object-contain"; // default if missing
                    const topAlign = "object-top";            // always align to top

                    return (
                        <div
                            key={item.src}
                            className={`relative w-full overflow-hidden ${aspect} h-full`}
                        >
                            {isVideo ? (
                                <video
                                    src={item.src}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className={`absolute inset-0 h-full w-full ${fit} ${topAlign}`}
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={item.alt ?? ""}
                                    fill
                                    className={`${fit} ${topAlign}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
