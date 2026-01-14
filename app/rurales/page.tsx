"use client";

import NocturnaShader from "@/components/pageDetailComponents/NocturnaShader";
import SecondaryDesktopLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryDesktopLayout";
import SecondaryMobileLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryMobileLayout";
import { projects, ruralesItems } from "@/data/projects";
import { ThemeProvider } from "@/components/providers/theme-context";


export default function RuralesPage() {
  const ruralesProject = projects.find(
    (p) => p.slug === "/rurales" || p.slug === "rurales"
  );

  if (!ruralesProject) return null;

  return (
    <section className="w-screen relative">
        <ThemeProvider themeKey="rurales">
      <NocturnaShader
        fixed
        images={["/media/rurales/sky-bg.png"]}
        useBlocks={false}
        speed={1.2}
        imageScale={1.1}
        showImageBackground
        backgroundOpacity={1}
        fadeInMs={400}
      />

<div className="md:hidden">
          <SecondaryMobileLayout
            gridItems={ruralesItems}
            title={ruralesProject.title}
            tagLine={ruralesProject.tagline}
            description={ruralesProject.description ?? ""}
            mobileHeroImage={ruralesProject.mobileHeroImage}
            tags={ruralesProject.tags}
          />
        </div>

        <div className="hidden md:block">
          <SecondaryDesktopLayout
            title={ruralesProject.title}
            tagLine={ruralesProject.tagline}
            description={ruralesProject.description ?? ""}
            tags={ruralesProject.tags}
            gridItems={ruralesItems}
          />
        </div>
      </ThemeProvider>
      
    </section>
  );
}
