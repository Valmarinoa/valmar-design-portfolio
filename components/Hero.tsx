"use client";

import BlurText from "./animations/BlurText";
import NocturnaShader from "./pageDetailComponents/NocturnaShader";
import LogoSvg from "./svg/LogoSvg";

export default function Hero() {
    return (
        <section className="relative h-svh w-full overflow-hidden z-9999">
            {/* Shader background */}
           
            <div className="w-full h-screen -pt-6 flex-col inset-0 px-6 absolute top-1/2 left-1/2 gap-3 -translate-1/2 z-999 flex items-center justify-center mix-blend-exclusion ">
            <BlurText
                as="h1"
                text="Valentina Marino"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue text-white text-lg tracking-widest"
                />
          
          <div className="h-13"><LogoSvg className="h-full w-auto text-white " />   </div>
          <BlurText
                as="h1"
                text="Product & Experience Designer"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue text-white text-sm tracking-widest"
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
        </section>
    );
}
