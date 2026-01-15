"use client";

import Image from "next/image";
import { cubicBezier, motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/types/project";
import BlurText from "../animations/BlurText";
import FadeContent from "../animations/FadeContent";

type Props = {
    title: string;
    heroVideo?: string;
    heroMedia?: string;
    thumbnail?: string;
    project: Project;
};


const tagsContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.4
        },
    },
};

const tagItem = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
          
            duration: .6,
            ease: cubicBezier(0.83, 0, 0.17, 1),

        },
    },
};

export default function DesktopHeroMedia({ title, heroVideo, heroMedia, thumbnail, project }: Props) {
    const [ready, setReady] = useState(false);

    const src = heroVideo ?? heroMedia ?? thumbnail;
    if (!src) return null;

    const isVideo = Boolean(heroVideo);


    return (
        <section className="w-full flex flex-col h-fit pt-28 md:pt-32 overflw-hidden">
            <div className="md:flex-row flex flex-col">
                <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 px-3 gap-1 md:gap-0">
                    {/* <FadeIn>
                        <h2 className="w-full text-5xl md:text-6xl text-left md:pb-3 ">{project.title}</h2>
                    </FadeIn> */}
                    <BlurText
                as="h2"
                text={project.title}
                delay={1}
                mode="words"
                className="w-full text-5xl md:text-6xl text-left md:pb-3 "
                />

                    {project.tagline && (
                            <BlurText
                            as="h3"
                            text={project.tagline}
                            delay={1}
                            mode="words"
                            className="w-full text-xl md:text-2xl text-left leading-4 text-neutral-700 "
                            />
                    )}
                </div>

                <div className="flex flex-col justify-end w-full md:w-1/2 pb-4 gap-4 pt-4 md:pt-4 px-3">
                    {project.description && (          
                            <BlurText
                            as="h3"
                            text={project.description}
                            delay={1.6}
                            mode="block"
                            className="w-full text-base md:text-2xl text-left leading-snug"
                        />
                    )}

                    {project.tags?.length ? (
                        <motion.div
                            className="flex flex-wrap gap-1"
                            variants={tagsContainer}
                            
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            {project.tags.map((tag) => (
                                <motion.p
                                    key={tag}
                                    variants={tagItem}
                                    className="border opacity-70 border-black/70 text-[9px] rounded-full px-3 pt-1 pb-0.5 whitespace-nowrap"
                                >
                                    {tag.toUpperCase()}
                                </motion.p>
                            ))}
                        </motion.div>
                    ) : null}
                </div>
                </div>



            <div className="relative w-full mt-8 pb-[126.25%] md:pb-[55%] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: ready ? 1 : 0 }}
                    transition={{ duration: .9, ease: [0.16, 1, 0.3, 1], delay: 2.1 }}
                >
                    {isVideo ? (
                        <video
                            src={heroVideo}
                            muted
                            loop
                            autoPlay
                            playsInline
                            // IMPORTANT: for heavy videos, don't download fully upfront
                            preload="metadata"
                            // Fade only once it can actually play
                            onCanPlay={() => setReady(true)}
                            className="h-full w-full object-cover rounded-xs md:rounded-sm origin-bottom"
                        />
                    ) : (
                        <Image
                            src={src}
                            alt={title}
                            fill
                            className="object-cover rounded-xs md:rounded-sm"
                            // Next Image is lazy by default (unless priority)
                            loading="lazy"
                            onLoadingComplete={() => setReady(true)}
                            sizes="(min-width: 768px) 100vw, 100vw"
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
