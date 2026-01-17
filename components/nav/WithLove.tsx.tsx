"use client";

import { useTheme } from "@/components/providers/theme-context";
import FadeIn from "../animations/FadeIn";



export default function MobileNavbar() {
  const { theme } = useTheme();

  return (
    <div>
      {/* <FadeIn delay={1}> */}
        {/* Navbar ABOVE menu */}
        <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-[50%] z-9999 backdrop-blur-xl mix-blend-exclusion">
        <p className={`text-xs ${theme.nav} px-3 pt-2 pb-1 text-white`}>Coded with love ♡ ̆̈</p>
        </div>
      {/* </FadeIn> */}

    </div>
  );
}
