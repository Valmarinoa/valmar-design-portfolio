import BlurText from "@/components/animations/BlurText";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectRing3DWrapper from "@/components/ProjectRing3DWrapper";
import { getMessages } from "@/data/messages";
import { getServerLocale } from "@/lib/i18n-server";

export default async function HomePage() {
  const locale = await getServerLocale();
  const messages = getMessages(locale);

  return (
    <main className="w-full">
 
   
      {/* mobile: hero + grid */}
      <div className="block md:hidden"> 
        <Hero />
        <ProjectGrid />
      </div>

      {/* md+ : 3D ring */}
      <div className="hidden md:block">
         <p className="p-9 z-999 max-w-[550px] left-1/2 -translate-x-[50%] text-center absolute bottom-0 w-full text-neutral-800 text-sm leading-4.5">
           {messages.home.desktopBlurb}
        </p>
        <ProjectRing3DWrapper />
      </div>
    </main>
  );
}
