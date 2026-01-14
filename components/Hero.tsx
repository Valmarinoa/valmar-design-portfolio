"use client";

import RosaShader from "@/components/pageDetailComponents/RosaShader";
import MaskText from "./animations/MaskText";
import BlurText from "./animations/BlurText";
import Image from "next/image";
import NocturnaShader from "./pageDetailComponents/NocturnaShader";
import LogoSvg from "./svg/LogoSvg";

export default function Hero() {
    return (
        <section className="relative h-svh w-full overflow-hidden">
            {/* Shader background */}
           
            <div className="w-full h-screen flex-col inset-0 px-6 absolute top-1/2 left-1/2 -translate-1/2 z-999 flex items-center justify-center mix-blend-exclusion ">
            <BlurText
                as="h1"
                text="Valentina Marino"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue text-white text-lg tracking-widest pb-10"
                />
          
          <div className="h-13"><LogoSvg className="h-full w-auto text-white " />   </div>
          <BlurText
                as="h1"
                text="Product & Experience Designer"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue text-white text-sm tracking-widest pt-3"
                />
   
        </div>

        <NocturnaShader
        images={["/media/globo.png"]}
        clickToCycle={false}
        speed={2.5}
        chromatic={0.6}
        imageFit="contain"
        imageScale={1.4}
        bgColor={[241, 241, 241]}
        fixed={false}
      />
            {/* <div className="w-dvw p-2">
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
            </div> */}
        </section>
    );
}
