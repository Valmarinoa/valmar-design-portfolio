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

  // optional poster if you have one
  poster?: string;
};

const containSlugs = new Set(["merged-landscapes", "frozen-woods"]);
const rootSlugs = new Set(["rurales", "totemica"]);

function normalizeSlug(slug: string) {
  return slug.replace(/^\/+/, "");
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

export default function ProjectCard({
  title,
  slug,
  image,
  description,
  link,
  video,
  poster,
}: Props) {
  const cleanSlug = slug ? normalizeSlug(slug) : null;

  const useContain = cleanSlug ? containSlugs.has(cleanSlug) : false;
  const fitClass = useContain ? "object-contain" : "object-cover";

  const href: string | null =
    link
      ? link
      : cleanSlug
        ? rootSlugs.has(cleanSlug)
          ? `/${cleanSlug}`
          : `/projects/${cleanSlug}`
        : null;

  const external = href ? isExternalUrl(href) : false;

  // Media block (NOT wrapped in a Link)
  const Media = (
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
          controlsList="nodownload noplaybackrate"
          poster={poster}
          {...({ "webkit-playsinline": "true" } as any)}
          // ✅ Key bit: make the video non-interactive so iOS doesn't force tap-to-play UI
          className={`pointer-events-none w-full h-auto ${fitClass} transition-transform duration-300 group-hover:scale-105`}
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
        />
      ) : null}
    </div>
  );

  const Text = (
    <div className="mt-2 space-y-1">
      <p className="text-base font-medium leading-tight">{title}</p>
      <p className="text-xs leading-tight text-neutral-600">
        {description ?? "Here goes project small description."}
      </p>
    </div>
  );

  // If nothing to navigate to, render non-clickable
  if (!href) {
    return (
      <div className="group block">
        {Media}
        {Text}
      </div>
    );
  }

  // ✅ Make the whole card clickable via an overlay link (not wrapping the video)
  return (
    <div className="group relative block">
      {Media}
      {Text}

      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="absolute inset-0 z-10"
        />
      ) : (
        <Link
          href={href}
          aria-label={`Open ${title}`}
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
}
