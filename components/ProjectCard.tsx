"use client";

import Image from "next/image";
import Link from "next/link";

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
  // remove leading slashes so "/totemica" -> "totemica"
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
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
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
