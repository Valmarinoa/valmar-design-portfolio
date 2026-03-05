import AnimatedBlurb from "@/components/animations/AnimatedBlurb";
import BlurText from "@/components/animations/BlurText";
import Hero from "@/components/Hero";
import MobileFooter from "@/components/MobileFooter";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectRing3DWrapper from "@/components/ProjectRing3DWrapper";
import { getMessages } from "@/data/messages";
import { getServerLocale } from "@/lib/i18n-server";

export default async function HomePage() {
  const locale = await getServerLocale();
  const messages = getMessages(locale);

  return (
    <main className="w-full">
      <div className="block md:hidden"> 
        <Hero />
        <ProjectGrid />
      </div>
      <div className="hidden md:block">
        <AnimatedBlurb>
          {messages.home.desktopBlurb}
        </AnimatedBlurb>
        <ProjectRing3DWrapper />
      </div>
    </main>
  );
}