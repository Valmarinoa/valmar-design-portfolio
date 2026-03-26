import AnimatedBlurb from "@/components/animations/AnimatedBlurb";
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
      <div className="hidden md:block relative min-h-screen">
        <div className="absolute bottom-0 left-0 right-0 z-999 px-9 pb-6 flex items-center justify-between gap-8">
          <div className="max-w-[760px] text-left">
            <AnimatedBlurb>{messages.home.desktopBlurb}</AnimatedBlurb>
          </div>
          <AnimatedBlurb>
          <a
            href={`mailto:${messages.contact.email}`}
            className="shrink-0 text-xs uppercase bg-neutral-900 p-5 whitespace-nowrap rounded-full tracking-widest text-background border border-transparent hover:bg-background hover:border hover:border-neutral-900 hover:text-neutral-900 transition-all"
            aria-label="Work with me (email)"
          >
            Work with me
          </a>
          </AnimatedBlurb>
        </div>
        <ProjectRing3DWrapper />
      </div>
    </main>
  );
}