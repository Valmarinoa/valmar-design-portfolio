import BlurText from "@/components/animations/BlurText";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectRing3DWrapper from "@/components/ProjectRing3DWrapper";
import LogoSvg from "@/components/svg/LogoSvg";

export default function HomePage() {
  return (
    <main className="w-full">
 
   
      {/* mobile: hero + grid */}
      <div className="block md:hidden">
        
             <div className="w-full h-screen flex-col inset-0 px-6 absolute top-1/2 left-1/2 -translate-1/2 z-999 flex items-center justify-center mix-blend-exclusion ">
            <BlurText
                as="h1"
                text="Valentina Mariño"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue  text-lg tracking-widest pb-10"
                />
          
          <div className="h-13">
            <LogoSvg className="h-full w-auto" />   
          </div>
          <BlurText
                as="h1"
                text="Product & Experience Designer"
                delay={0.4}
                mode="words"
                className=" mix-blend-difference font-helvetica-neue text-sm tracking-widest pt-3"
                />
   
        </div>
        <Hero />
        <ProjectGrid />
      </div>

      {/* md+ : 3D ring */}
      <div className="hidden md:block">
        <div className="w-full h-8 px-6 fixed top-6 left-0 z-999 flex items-center justify-center mix-blend-exclusion">
          <LogoSvg className="h-full w-auto text-white" />   
        </div>
         <p className="p-6 z-999 max-w-[450px] left-1/2 -translate-x-[50%] text-center absolute bottom-0 w-full text-neutral-800 leading-4">

Valentina Marino is a Product & Experience designer, translating the sensibility of Latin American magical realism into
contemporary design and technology. 
</p>
        <ProjectRing3DWrapper />
      </div>
    </main>
  );
}
