"use client";

import NocturnaShader from "@/components/pageDetailComponents/NocturnaShader";
import SecondaryDesktopLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryDesktopLayout";
import SecondaryMobileLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryMobileLayout";
import { projects, totemicaItems } from "@/data/projects";
import { ThemeProvider } from "@/components/providers/theme-context";

export default function TotemicaPage() {
  const totemicaProject = projects.find(
    (p) => p.slug === "/totemica" || p.slug === "totemica"
  );

  if (!totemicaProject) return null;

  return (
    <section className="w-screen relative">
      <ThemeProvider themeKey="totemica">
      <NocturnaShader
        fixed
        images={["/shaders/tote.png"]}
        useBlocks={false}
        speed={0.5}
        imageScale={1.1}
        showImageBackground
        backgroundOpacity={1}
        fadeInMs={400}
      />

      <div className="md:hidden">
        <SecondaryMobileLayout
          gridItems={totemicaItems}
          title={totemicaProject.title}
          mobileHeroImage={totemicaProject.mobileHeroImage}
          tagLine={totemicaProject.tagline}
          description={totemicaProject.description ?? ""}
          tags={totemicaProject.tags}
        />
      </div>

      <div className="hidden md:block">
        <SecondaryDesktopLayout
          title={totemicaProject.title}
          tagLine={totemicaProject.tagline}
          description={totemicaProject.description ?? ""}
          tags={totemicaProject.tags}
          gridItems={totemicaItems}
        />
      </div>
      </ThemeProvider>
    </section>
  );
}
