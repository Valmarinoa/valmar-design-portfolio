"use client";

import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import Link from "next/link";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "About", link: "/about" },
  { label: "Dev Work", ariaLabel: "Work as front-end developer", link: "https://valenmarino.vercel.app/" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/vamarino.a" },
  { label: "GitHub", link: "https://github.com/valmarino" },
  { label: "LinkedIn", link: "https://linkedin.com/in/valentina-marino-arboleda/" },
  { label: "email", link: "mailto:valenmarinocol@gmail.com" },
];

export default function DSKNavbar() {
  const { theme } = useTheme();


  return (

     <div className={`hidden md:flex w-full h-8 px-8 fixed top-8 left-0 z-999 items-center justify-between ${theme.nav} mix-blend-exclusion`}>
          <div className="flex items-center gap-6">
            <button>About</button>
            <a href="https://valenmarino.vercel.app/" target="_blank">Dev Work</a>
            <button>Contact</button>
          </div>
         
          <div className="flex items-center gap-4">
            <button>EN</button>
           |
            <button>PT</button>
          </div>
           <Link
              href="/"
              aria-label="Go to homepage"
              className="inline-flex items-center fixed top-6 left-1/2 -translate-x-1/2 "
            >
              <LogoSvg className={`h-10 w-auto ${theme.nav}`} />
            </Link> 
        </div>
  );
}
