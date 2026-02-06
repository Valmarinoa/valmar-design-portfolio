"use client";

import { useState } from "react";
import NocturnaShader from "@/components/pageDetailComponents/NocturnaShader";
import SecondaryDesktopLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryDesktopLayout";
import SecondaryMobileLayout from "@/components/pageDetailComponents/secondary-layout/SecondaryMobileLayout";
import { getProjects, totemicaItems } from "@/data/projects";
import { ThemeProvider } from "@/components/providers/theme-context";
import useLocale from "@/lib/use-locale";
import { motion } from "framer-motion";

export default function TotemicaPage() {
  const locale = useLocale();
  const [shaderReady, setShaderReady] = useState(false);
  const projects = getProjects(locale);
  const totemicaProject = projects.find(
    (p) => p.slug === "/totemica" || p.slug === "totemica"
  );

  if (!totemicaProject) return null;

  return (
    <section className="w-screen relative">
      <ThemeProvider themeKey="totemica">
        {/* Shader loads first, blocks content until ready */}
        <NocturnaShader
          fixed
          images={["/shaders/tote.png"]}
          useBlocks={false}
          speed={0.2}
          imageScale={1.1}
          showImageBackground
          backgroundOpacity={1}
          fadeInMs={400}
          maxDpr={1.5} // Limit for performance
          onReady={() => setShaderReady(true)}
        />

        {/* Content fades in only after shader is ready */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: shaderReady ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10" // Ensure content is above shader
        >
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
        </motion.div>

        {/* Optional loading indicator while shader initializes */}
        {!shaderReady && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}
      </ThemeProvider>
    </section>
  );
}