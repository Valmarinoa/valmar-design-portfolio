"use client";

import { useState } from "react";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import FadeIn from "../animations/FadeIn";
import StaggeredMenu from "./StaggeredMenu";
import StaggeredMenuToggle from "./StaggeredMenuToggle";
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

export default function MobileNavbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FadeIn delay={1}>
        {/* Navbar ABOVE menu */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-9997 p-3 w-screen h-fit backdrop-blur-xl">
          <div className="flex items-center justify-between pointer-events-auto ">
          <Link
              href="/"
              aria-label="Go to homepage"
              onClick={() => setOpen(false)}
              className="inline-flex items-center"
            >
              <LogoSvg className={`h-6 w-auto ${theme.nav}`} />
            </Link>

            <div className={`h-10 rounded-full flex items-center justify-center px-3 ${theme.nav}`}>
              <StaggeredMenuToggle
                open={open}
                onToggle={() => setOpen((v) => !v)}
              />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Menu BELOW navbar */}
      <StaggeredMenu
        open={open}
        onClose={() => setOpen(false)}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        accentColor="#ff6b6b"
        isFixed
      />
    </div>
  );
}
