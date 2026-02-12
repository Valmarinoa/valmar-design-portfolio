"use client";

import NocturnaShader from "@/components/pageDetailComponents/NocturnaShader";
import SecondaryDesktopLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryDesktopLayout";
import SecondaryMobileLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryMobileLayout";
import { getProjects, ruralesItems } from "@/data/projects";
import { ThemeProvider } from "@/components/providers/theme-context";
import useLocale from "@/lib/use-locale";


export default function RuralesPage() {
  const locale = useLocale();
  const projects = getProjects(locale);
  const ruralesProject = projects.find(
    (p) => p.slug === "/rurales" || p.slug === "rurales"
  );

  if (!ruralesProject) return null;

  return (
    <section className="w-screen relative">
        <ThemeProvider themeKey="rurales">
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
