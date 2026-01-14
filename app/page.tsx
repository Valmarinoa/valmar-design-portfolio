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
