"use client";

import { useState } from "react";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import FadeIn from "../animations/FadeIn";
import StaggeredMenu from "./StaggeredMenu";
import StaggeredMenuToggle from "./StaggeredMenuToggle";
import LocaleToggle from "./LocaleToggle";
import Link from "next/link";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import { localizePath } from "@/lib/i18n";

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

  const menuItems = messages.nav.items.map((item) => ({
    ...item,
    link: isExternalUrl(item.href) ? item.href : localizePath(item.href, locale),
  }));

  return (
    <div>
      <FadeIn delay={1}>
        {/* Navbar ABOVE menu */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-9997 p-3 w-screen h-fit mix-blend-exclusion">
          <div className="flex items-center justify-between pointer-events-auto ">
            <Link
              href={localizePath("/", locale)}
              aria-label={messages.nav.logoAria}
              onClick={() => setOpen(false)}
              className="inline-flex items-center "
            >
              <LogoSvg className={`h-6 w-auto ${theme.nav}`} />
            </Link>

            <div className="flex items-center gap-3">
              <LocaleToggle />
              <div className={`h-10 rounded-full flex items-center justify-center px-3 ${theme.nav}`}>
                <StaggeredMenuToggle
                  open={open}
                  onToggle={() => setOpen((v) => !v)}
                />
              </div>
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
        footerContent={<LocaleToggle />}
        displaySocials
        displayItemNumbering
        accentColor="#ff6b6b"
        isFixed
      />
    </div>
  );
}
