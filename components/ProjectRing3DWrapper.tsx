"use client";

import dynamic from "next/dynamic";

const ProjectRing3D = dynamic(() => import("./ProjectRing3D"), {
    ssr: false,
});

export default function ProjectRing3DWrapper() {
    return (
      <section
        className="
          relative
          min-h-screen
          w-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/media/sky2.png')",
          
        }}
      >
        {/* Optional overlay for contrast */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
  
        {/* Content */}
        <div className="relative z-10">
          <ProjectRing3D />
        </div>
      </section>
    );
  }
