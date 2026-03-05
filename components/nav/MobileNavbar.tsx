// components/nav/MobileNavbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import StaggeredMenu from "./StaggeredMenu";
import StaggeredMenuToggle from "./StaggeredMenuToggle";
import LocaleToggle from "./LocaleToggle";
import Link from "next/link";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import { localizePath } from "@/lib/i18n";
import { useLandingScroll } from "@/components/providers/LandingScrollContext";
import { fadeInDown, staggerContainer } from "@/anim/animations";

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/vamarino.a" },
  { label: "GitHub", link: "https://github.com/valmarino" },
  { label: "LinkedIn", link: "https://linkedin.com/in/valentina-marino-arboleda/" },
  { label: "email", link: "mailto:valenmarinocol@gmail.com" },
];

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

export default function MobileNavbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const messages = getMessages(locale);
  
  const { hasScrolledPastHero, isLandingPage } = useLandingScroll();

  const menuItems = messages.nav.items.map((item) => ({
    ...item,
    link: isExternalUrl(item.href) ? item.href : localizePath(item.href, locale),
  }));

  const shouldShowNavbar = !isLandingPage || (isLandingPage && hasScrolledPastHero);

  return (
    <div>
      <AnimatePresence mode="wait">
        {shouldShowNavbar && (
          <motion.div
            className="md:hidden fixed top-0 left-0 right-0 z-[9997] p-3 w-screen h-fit mix-blend-exclusion pointer-events-none"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div 
              className="flex items-center justify-between pointer-events-auto"
              variants={fadeInDown}
              custom={0}
            >
              <Link
                href={localizePath("/", locale)}
                aria-label={messages.nav.logoAria}
                onClick={() => setOpen(false)}
                className="inline-flex items-center"
              >
                <LogoSvg className={`h-6 w-auto ${theme.nav}`} />
              </Link>

              <motion.div 
                className={`h-10 rounded-full flex items-center justify-center px-3 ${theme.nav}`}
                variants={fadeInDown}
                custom={0.1}
              >
                <StaggeredMenuToggle
                  open={open}
                  className={`${theme.nav}`}
                  onToggle={() => setOpen((v) => !v)}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <StaggeredMenu
        open={open && shouldShowNavbar}
        onClose={() => setOpen(false)}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        footerContent={<LocaleToggle />}
        displaySocials
        displayItemNumbering
        accentColor="#ff6b6b"
        isFixed
      />
    </div>
  );
}