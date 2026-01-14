"use client";

import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import FadeIn from "../animations/FadeIn";

export default function MobileNavbar() {
  const { theme } = useTheme();

  return (
    <FadeIn delay={1}>
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-3 pointer-events-none">
      <div className="flex items-center justify-between pointer-events-auto">
      <LogoSvg className={`h-6 w-auto ${theme.nav}`} />


        <button
          type="button"
          className={`h-10 w-10 rounded-full flex items-center justify-center ${theme.nav}`}
          aria-label="Open menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-6 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
          </div>
        </button>
      </div>
    </div></FadeIn>
  );
}
