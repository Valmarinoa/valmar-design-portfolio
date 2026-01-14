"use client";

import MaskText from "@/components/animations/MaskText";
import FadeIn from "../animations/FadeIn";

type QuoteBlockProps = {
    quote: string;
};

export default function QuoteBlock({ quote }: QuoteBlockProps) {
    if (!quote) return null;

    return (
        <section className="w-full flex items-center justify-center py-16 md:py-0 max-w-[1000px] px-4">
                <h3 className="w-full md:max-w-[845px] text-left md:text-center text-2xl">
                    {quote}
                </h3>
        </section>
    );
}
