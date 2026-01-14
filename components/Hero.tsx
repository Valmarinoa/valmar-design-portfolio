"use client";

import RosaShader from "@/components/pageDetailComponents/RosaShader";
import MaskText from "./animations/MaskText";
import BlurText from "./animations/BlurText";
import Image from "next/image";
import NocturnaShader from "./pageDetailComponents/NocturnaShader";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Shader background */}
           


            <NocturnaShader
                images={["/media/globo.png"]}
                clickToCycle={false}
                speed={2.5}
                chromatic={.6}
                imageFit="contain"
                imageScale={1.4}
                bgColor={[241, 241, 241]}
            /> 
            <div className="w-dvw p-2">
                <BlurText
                as="h1"
                text="Valentina Marino"
                delay={0.6}
                mode="letters"
                className=" text-[42px] font-normal text-white mix-blend-difference font-helvetica-neue"
                />
                <BlurText
                as="h1"
                text="Product & Experience Designer"
                delay={2}
                mode="words"
                className="text-xl text-white mix-blend-difference leading-snug"
                />
                     <BlurText
                as="h1"
                text="Working across Human Interfaces, Materiality & Technology"
                delay={2.4}
                mode="block"
                className="text-sm text-white mix-blend-difference leading-snug font-thin"
                />
            </div>
        </section>
    );
}
