import BlurText from "@/components/animations/BlurText";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectRing3DWrapper from "@/components/ProjectRing3DWrapper";

export default function HomePage() {
  return (
    <main className="w-full">
 
   
      {/* mobile: hero + grid */}
      <div className="block md:hidden">
        <Hero />
        <ProjectGrid />
      </div>

      {/* md+ : 3D ring */}
      <div className="hidden md:block">
      <div className="w-dvw p-6 z-999 max-w-[450px]  text-neutral/80 left-1/2 -translate-x-[50%] text-center fixed top-0  leading-snug">
                <BlurText
                as="h1"
                text="VALENTINA MARINO"
                delay={0.4}
                mode="words"
                className=" text-2xl mix-blend-difference font-helvetica-neue font-medium"
                />
                <BlurText
                as="h1"
                text="Product & Experience Designer"
                delay={.9}
                mode="words"
                className="text-lg mix-blend-difference leading-none italic"
                />
            </div>

      <p className="p-6 z-999 max-w-[450px] left-1/2 -translate-x-[50%] text-center absolute bottom-0 w-full text-neutral-800 leading-snug">

Translating the sensibility of Latin American magical realism into
contemporary design and technology. 
</p>
        <ProjectRing3DWrapper />
      </div>
    </main>
  );
}
