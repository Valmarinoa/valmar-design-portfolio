"use client";

import type { Project } from "@/types/project"; // ✅ types from types file
import QuoteBlock from "../pageDetailComponents/QuoteBlock";
import MediaTextBlock from "../pageDetailComponents/MediaTextBlock";
import BlockWrapper from "./BlockWrapper";
import TextTripticBlock from "../pageDetailComponents/TextTripticBlock";
import ImageStoryBlock from "../pageDetailComponents/ImageStoryBlock";
import GalleryBlock from "../pageDetailComponents/GalleryBlock";
import VideoBlock from "../pageDetailComponents/VideoBlock";
import InspirationBlock from "../pageDetailComponents/InspirationBlock";
import DoubleBlock from "../pageDetailComponents/DoubleBlock";
import { cubicBezier, motion } from "framer-motion";
import LazyMount from "../animations/LazyMount";
import DesktopHeroMedia from "../pageDetailComponents/DesktopHeroMedia";
import MagazineBlock from "../pageDetailComponents/MagazineBlock";
import TimelineBlock from "../pageDetailComponents/TimelineBlock";


type Props = {
    project: Project;
};

const tagsContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.14,
        },
    },
};

const tagItem = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: .9,
            ease: cubicBezier(0.83, 0, 0.17, 1),

        },
    },
};

export default function ProjectDetailPage({ project }: Props) {
    return (
        <div className="w-dvw min-h-screen flex flex-col items-center max-w-[1240px] mx-auto px-0 md:px-6 text-neutral-800">


            {/* HERO MEDIA (lazy + delicate fade when loaded) */}
            <section className="w-full">
                <DesktopHeroMedia
                    title={project.title}
                    heroVideo={project.heroVideo}
                    heroMedia={project.heroMedia}
                    thumbnail={project.thumbnail}
                    project={project}
                />
            </section>

            {/* DETAIL BLOCKS (lazy mount heavy ones) */}
            {project.blocks?.map((block, index) => {
                const key = `${block.type}-${index}`;

                switch (block.type) {
                    case "quote":
                        return (
                            <BlockWrapper key={key}>
                                <QuoteBlock quote={block.quote} />
                            </BlockWrapper>
                        );

                    case "mediaText":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <MediaTextBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "tripticGallery":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <TextTripticBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "doubleGallery":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <DoubleBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "gallery":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <GalleryBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "imageStory":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <ImageStoryBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "videoFull":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <VideoBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                    case "inspiration":
                        return (
                            <BlockWrapper key={key}>
                                <LazyMount>
                                    <InspirationBlock block={block} />
                                </LazyMount>
                            </BlockWrapper>
                        );

                        case "magazine":
                            return (
                                <BlockWrapper key={key}>
                                    <LazyMount>
                                        <MagazineBlock block={block} />
                                    </LazyMount>
                                </BlockWrapper>
                            );

                            case "timeline":
                                return (
                                    <BlockWrapper key={key}>
                                        <LazyMount>
                                            <TimelineBlock block={block} />
                                        </LazyMount>
                                    </BlockWrapper>
                                );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
