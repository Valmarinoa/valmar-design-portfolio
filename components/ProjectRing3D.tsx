"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, easeOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

/* ================= CONFIG ================= */

const RADIUS = 380;
const BASE_SPEED = -8;

const SPEED_SMOOTH_MS = 300;
const ANGLE_SMOOTH_MS = 180;

const WHEEL_SENSITIVITY = 0.06;
const WHEEL_SPEED_BOOST = 10;

const INACTIVITY_DELAY_MS = 4_000; // ✅ 4 seconds

/* ================= SLUG HANDLING ================= */

const ROOT_SLUGS = new Set(["totemica", "rurales"]);

function normalizeSlug(slug: string) {
  return slug.replace(/^\/+/, "");
}

function hrefForProject(slug: string) {
  const clean = normalizeSlug(slug);
  return ROOT_SLUGS.has(clean) ? `/${clean}` : `/projects/${clean}`;
}

/* ================= VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/* ================= COMPONENT ================= */

export default function ProjectRing3D() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const ringRef = useRef<HTMLDivElement | null>(null);

  const angle = useMotionValue(0);
  const targetAngleRef = useRef(0);
  const speedRef = useRef(BASE_SPEED);

  // ✅ inactivity tracking (start auto-spin immediately on mount)
  const lastInteractionRef = useRef<number>(0);

  useEffect(() => {
    lastInteractionRef.current = performance.now() - INACTIVITY_DELAY_MS - 1;
  }, []);

  const count = projects.length || 1;
  const step = 360 / count;

  /* ================= MAIN LOOP ================= */

  useAnimationFrame((_, delta) => {
    const deltaSeconds = delta / 1000;
    const now = performance.now();

    const inactiveFor = now - lastInteractionRef.current > INACTIVITY_DELAY_MS;

    // Auto-spin only when inactive + not hovered
    if (!hoveredSlug && inactiveFor) {
      const speedSmoothing = 1 - Math.exp(-delta / SPEED_SMOOTH_MS);
      speedRef.current += (BASE_SPEED - speedRef.current) * speedSmoothing;
      targetAngleRef.current += speedRef.current * deltaSeconds;
    }

    const currentAngle = angle.get();
    const angleSmoothing = 1 - Math.exp(-delta / ANGLE_SMOOTH_MS);

    angle.set(
      currentAngle + (targetAngleRef.current - currentAngle) * angleSmoothing
    );
  });

  /* ================= WHEEL ================= */

  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      lastInteractionRef.current = performance.now();

      const dominant =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      const deltaAngle = -dominant * WHEEL_SENSITIVITY;

      targetAngleRef.current += deltaAngle;
      speedRef.current = deltaAngle * WHEEL_SPEED_BOOST;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  /* ================= RENDER ================= */

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div
        ref={ringRef}
        className="relative h-[420px] w-full max-w-4xl"
        style={{ perspective: "1400px" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            rotateY: angle,
            transformStyle: "preserve-3d",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => {
            const cleanSlug = normalizeSlug(project.slug);

            const baseAngle = step * index;
            const rad = (baseAngle * Math.PI) / 180;
            const verticalOffset = Math.sin(rad) * -20;

            const cardTransform = `
              translate3d(-50%, -50%, 0)
              rotateY(${baseAngle}deg)
              translateZ(${RADIUS}px)
              translateY(${verticalOffset}px)
            `;

            return (
              <div
                key={cleanSlug}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: cardTransform,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="group relative"
                  onMouseEnter={() => {
                    setHoveredSlug(cleanSlug);
                    lastInteractionRef.current = performance.now();
                  }}
                  onMouseLeave={() => setHoveredSlug(null)}
                  variants={itemVariants}
                >
                  <Link href={hrefForProject(project.slug)} className="block">
                    <div className="relative h-24 w-32 overflow-hidden rounded-[4px] transition-transform duration-300 group-hover:scale-125 md:h-32 md:w-44 lg:h-40 lg:w-56">
                      {project.videoThumbnail ? (
                        <video
                          src={project.videoThumbnail}
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 h-full w-full object-contain rounded-[4px]"
                        />
                      ) : project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          priority
                          quality={100}
                          className="object-contain rounded-[4px]"
                        />
                      ) : null}
                    </div>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
