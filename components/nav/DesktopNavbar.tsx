"use client";

import Link from "next/link";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import { localizePath } from "@/lib/i18n";
import LocaleToggle from "@/components/nav/LocaleToggle";

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

export default function DesktopNavbar() {
  const { theme } = useTheme();
  const locale = useLocale();
  const messages = getMessages(locale);

  const menuItems = messages.nav.items.map((item) => ({
    ...item,
    href: isExternalUrl(item.href) ? item.href : localizePath(item.href, locale),
  }));

  return (
    <div className="hidden md:flex fixed top-4 left-0 right-0 z-9997 px-8 py-6 items-center justify-between pointer-events-none mix-blend-exclusion">
      <div className="flex items-center gap-10 pointer-events-auto">
        
        <nav className="flex items-center gap-6">
          {menuItems.map((item) =>
            isExternalUrl(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs uppercase tracking-[0.2em] ${theme.nav}`}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] ${theme.nav}`}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
      <div className="pointer-events-auto">
        <LocaleToggle />
      </div>
      <Link href={localizePath("/", locale)} aria-label={messages.nav.logoAria} className="fixed top-9 left-1/2 -translate-x-[50%]">
          <LogoSvg className={`h-6 w-auto ${theme.nav}`} />
        </Link>
    </div>
  );
}
