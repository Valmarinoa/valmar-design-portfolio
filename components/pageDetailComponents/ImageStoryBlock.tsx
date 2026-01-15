"use client";

import Image from "next/image";
import type { ImageStoryBlock } from "@/types/project";
import MaskText from "../animations/MaskText";
import FadeIn from "../animations/FadeIn";

type Props = {
    block: ImageStoryBlock;
};

export default function ImageStoryBlock({ block }: Props) {
    const { leftImage, title, subtitle, body, rightImage } = block;

    return (
        <section className="w-full relative max-w-[1440px] ">
            <div className="mx-auto h-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-0">
                {/* LEFT LARGE IMAGE */}
                <div className="relative w-full h-full max-h-[850px] md:min-h-[700px]" >
                    <Image
                        src={leftImage.src}
                        alt={leftImage.alt ?? ""}
                        fill
                        className="object-cover rounded-xs h-full w-full"

                    />
                </div>

                {/* RIGHT TEXT + SMALL IMAGE */}
                 
                    <div className="flex flex-col h-full text-left">
                    {/* Title + body */}
                    {title && <div className="mb-8 mt-6 px-3 md:px-0">
                        <MaskText lineAs='h3' className="text-3xl md:text-4xl" text={title} />
                       
                       {subtitle && <MaskText lineAs='p' className="opacity-70 text-xs md:pt-2" text={subtitle} />} 
                        
                        

                    </div>
                    }
                    <p className="text-base px-3 md:px-0" > {body}  </p>

                    {/* Small image aligned bottom-right */}
                    {rightImage && (
                        <div className="mt-6 md:mt-10 self-end w-1/2 md:w-72">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={rightImage.src}
                                    alt={rightImage.alt ?? ""}
                                    fill
                                    className="object-cover rounded-xs"
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
