"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  slug: string; // may come as "totemica" or "/totemica"
  image?: string;
  description?: string;
  video?: string;
};

const containSlugs = new Set(["rurales", "merged-landscapes", "frozen-woods"]);
const rootSlugs = new Set(["totemica"]); // projects that live at root (no /projects)

function normalizeSlug(slug: string) {
  return slug.replace(/^\/+/, "");
}

export default function ProjectCard({ title, slug, image, description, video }: Props) {
  const cleanSlug = normalizeSlug(slug);

  const useContain = containSlugs.has(cleanSlug);
  const fitClass = useContain ? "object-contain" : "object-cover";

  const href = rootSlugs.has(cleanSlug) ? `/${cleanSlug}` : `/projects/${cleanSlug}`;

  return (
    <Link href={href} className="group block">
      {/* MEDIA */}
      <div className={`w-full overflow-hidden ${useContain ? "flex items-center justify-center" : ""}`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className={`w-full h-auto ${fitClass} transition-transform duration-300 group-hover:scale-105`}
          />
        ) : video ? (
          <video
            src={video}
            // autoplay requirements (esp iOS)
            muted
            playsInline
            loop
            autoPlay
            // important: helps iOS autoplay thumbnails
            preload="auto"
            controls={false}
            disablePictureInPicture
            // TS-safe way to set webkit-playsinline:
            {...({ "webkit-playsinline": "true" } as any)}
            // make sure iOS really treats it as muted
            ref={(el) => {
              if (!el) return;
              el.muted = true;
              (el as any).defaultMuted = true;
            }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              v.muted = true;
              (v as any).defaultMuted = true;

              const p = v.play();
              if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
            }}
            onCanPlay={(e) => {
              const v = e.currentTarget;
              const p = v.play();
              if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
            }}
            className={`w-full h-auto ${fitClass} transition-transform duration-300 group-hover:scale-105`}
          />
        ) : null}
      </div>

      {/* TEXT UNDER MEDIA */}
      <div className="mt-2 space-y-1">
        <p className="text-base font-medium leading-tight">{title}</p>
        <p className="text-xs leading-tight text-neutral-600">
          {description ?? "Here goes project small description."}
        </p>
      </div>
    </Link>
  );
}
