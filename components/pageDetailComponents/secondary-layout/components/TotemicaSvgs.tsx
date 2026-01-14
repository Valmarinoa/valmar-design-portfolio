"use client";

import { motion } from "framer-motion";

type Props = {
  /** SVG width in px (height auto via viewBox ratio) */
  width?: number | string;

  /** Optional stroke color override */
  stroke?: string;

  /** Optional stroke width override */
  strokeWidth?: number;

  /** Container className */
  className?: string;

  /** Same viewport behavior you used before */
  viewport?: { once?: boolean; amount?: number };

  /** Animation timing */
  duration?: number;
  stagger?: number;

  /** If you want to disable the draw animation and render static */
  animate?: boolean;
};

const DEFAULT_STROKE = "#FD9A00";
const VIEWBOX_W = 308;
const VIEWBOX_H = 89;

export default function TotemicaSvgs({
  width = 308,
  stroke = DEFAULT_STROKE,
  strokeWidth = 5,
  className,
  viewport = { once: true, amount: 0.6 },
  duration = 1.2,
  stagger = 0.18,
  animate = true,
}: Props) {
  const svgVariants = {
    hidden: {},
    show: {
      transition: animate
        ? { staggerChildren: stagger }
        : undefined,
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    show: {
      pathLength: 1,
      transition: animate
        ? {
            duration,
            ease: [0.87, 0, 0.13, 1] as const, // easeInOutExpo-ish
          }
        : undefined,
    },
  };

  // Keep aspect ratio automatically when width changes
  const height =
    typeof width === "number" ? (width * VIEWBOX_H) / VIEWBOX_W : undefined;

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 308 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={svgVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "show" : undefined}
      viewport={viewport}
    >
      <motion.path
        variants={pathVariants}
        d="M305.018 1.21777L303.598 3.76306L302.731 12.0931C303.598 16.5667 303.409 27.5808 295.713 35.8492L293.978 37.2375M293.978 37.2375C293.479 40.4513 291.896 47.9277 289.562 52.1236C287.828 55.2417 286.065 60.7044 285.882 68.398M293.978 37.2375L292.795 35.8492L292.007 32.3012L289.562 26.5936M288.222 87.2178C286.367 79.9307 285.758 73.6454 285.882 68.398M285.882 68.398L283.018 65.4671"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
      <motion.path
        variants={pathVariants}
        d="M73.0176 79.2178L76.6678 67.8361V66.2876L77.9605 65.281L79.7856 61.3323L89.4434 41.5111C90.1278 41.3305 91.5119 40.7523 91.5727 39.8852C91.6335 39.018 91.0911 37.7172 90.8123 37.1752L92.105 33.3039M113.018 8.21777L93.3978 29.4326L92.105 33.3039M92.105 33.3039L90.8123 30.8263L85.337 26.5678"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
      <motion.path
        variants={pathVariants}
        d="M208.018 12.2178C209.022 18.9546 212.423 35.4973 217.995 47.7733L220.066 53.5745V58.0657C221.258 61.0599 224.546 67.7967 228.16 70.7909C231.775 73.785 240.836 71.2899 244.915 69.6681M244.915 69.6681C248.052 64.6154 254.327 53.7242 254.327 50.5803C254.327 46.6505 253.009 46.0891 254.327 43.6564C254.877 42.6412 256.339 39.7148 257.905 36.5453M244.915 69.6681L241.338 76.2178M257.905 36.5453C259.342 33.6386 260.867 30.5276 261.857 28.4985C262.987 29.4965 264.907 31.792 263.551 32.9897C262.196 34.1874 259.223 35.8591 257.905 36.5453Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
      <motion.path
        variants={pathVariants}
        d="M166.967 2.21777L169.327 5.95897C170.532 8.00416 173.118 13.2618 173.826 17.9308C174.534 22.5998 177.71 32.3469 179.209 36.6368C179.443 36.9926 179.832 37.252 180.316 37.0595M182.97 31.7732C184.563 25.7275 185.453 21.2729 185.699 19.8014L189.018 12.9176M182.97 31.7732C182.009 35.4235 181.052 36.7662 180.316 37.0595M182.97 31.7732L185.699 30.2019M180.316 37.0595L181.274 49.6562L177.956 57.2134C177.267 59.8073 176.097 65.444 176.923 67.2398C177.749 69.0356 172.277 76.518 168.295 79.7354L164.018 87.2178"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
      <motion.path
        variants={pathVariants}
        d="M127.913 61.0218C126.273 55.2886 124.755 41.6205 125.056 35.3111L126.409 29.1594L128.514 23.0078L132.574 15.4365L137.536 13.859C141.445 11.4932 139.741 16.2776 139.039 18.4333C136.934 24.0592 133.145 37.1406 134.829 44.4595C136.513 51.7784 136.734 62.1258 136.032 66.3846V75.2178H133.927C129.116 75.2178 129.266 65.7539 127.913 61.0218Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
      <motion.path
        variants={pathVariants}
        d="M47.5654 12.6953C46.8653 15.7344 45.1998 22.2795 44.1386 24.1474C42.8121 26.4823 28.884 53.2781 31.2054 59.0597C32.5543 62.4193 31.4771 63.6014 31.2054 64.7658M31.2054 64.7658C31.0095 65.6053 31.2322 66.4355 33.0846 68.0657C36.6219 71.1789 44.2123 73.0691 47.5654 73.625C51.1027 73.8474 57.6688 73.6695 55.6348 71.1789C53.6009 68.6884 50.8079 65.9162 49.6656 64.8414C46.0178 65.3602 38.3684 63.3292 36.9535 51.0543C30.3579 47.5335 15.0223 38.5348 6.44433 30.7074L3.01758 37.045C5.15469 39.5281 12.8999 46.7181 26.7838 55.613C26.01 55.9836 24.9267 57.1918 26.7838 59.0597C28.6408 60.9276 30.5053 63.6421 31.2054 64.7658Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
      />
    </motion.svg>
  );
}
