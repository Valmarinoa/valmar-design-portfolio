"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;

  // external link (optional)
  link?: string;

  // internal slug (optional)
  slug?: string;

  image?: string;
  description?: string;
  video?: string;
};

const containSlugs = new Set(["merged-landscapes", "frozen-woods"]);
const rootSlugs = new Set(["rurales", "totemica"]);

function normalizeSlug(slug: string) {
  return slug.replace(/^\/+/, "");
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

export default function ProjectCard({ title, slug, image, description, link, video }: Props) {
  const cleanSlug = slug ? normalizeSlug(slug) : null;

  const useContain = cleanSlug ? containSlugs.has(cleanSlug) : false;
  const fitClass = useContain ? "object-contain" : "object-cover";

  // Decide destination:
  // 1) external link if provided
  // 2) internal href built from slug
  // 3) no destination (non-clickable)
  const href: string | null =
    link ? link : cleanSlug ? (rootSlugs.has(cleanSlug) ? `/${cleanSlug}` : `/projects/${cleanSlug}`) : null;

  const isExternal = href ? isExternalUrl(href) : false;

  const CardInner = (
    <>
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
            playsInline
            loop
            autoPlay
            preload="auto"
            controls={false}
            disablePictureInPicture
            {...({ "webkit-playsinline": "true" } as any)}
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
    </>
  );

  // Render as external <a>, internal <Link>, or non-clickable <div>
  if (!href) {
    return <div className="group block">{CardInner}</div>;
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className="group block"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
      >
        {CardInner}
      </a>
    );
  }

  return (
    <Link href={href} className="group block" aria-label={`Open ${title}`}>
      {CardInner}
    </Link>
  );
}
