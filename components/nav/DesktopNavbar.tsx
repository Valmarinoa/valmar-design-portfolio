"use client";

import Link from "next/link";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import { localizePath, stripLocaleFromPathname } from "@/lib/i18n";
import LocaleToggle from "@/components/nav/LocaleToggle";
import { usePathname } from "next/navigation";

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

export default function DesktopNavbar() {
  const { theme } = useTheme();
  const locale = useLocale();
  const messages = getMessages(locale);
  const pathname = usePathname();
  const normalizedPath = stripLocaleFromPathname(pathname ?? "/");

  const menuItems = messages.nav.items.map((item) => ({
    ...item,
    href: isExternalUrl(item.href) ? item.href : localizePath(item.href, locale),
  }));

  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 z-9997 px-8 py-6 items-center justify-between pointer-events-none">
      <div className="flex items-center gap-10 pointer-events-auto">
        <Link href={localizePath("/", locale)} aria-label={messages.nav.logoAria}>
          <LogoSvg className={`h-6 w-auto ${theme.nav}`} />
        </Link>
        <nav className="flex items-center gap-6">
          {menuItems.map((item) => {
            const isExternal = isExternalUrl(item.href);
            const isActive = !isExternal && stripLocaleFromPathname(item.href) === normalizedPath;

            const label = (
              <div className="items-center flex flex-col justify-center overflow-visible h-[15px]">
                {item.label}
              </div>
            );

            return isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs uppercase tracking-[0.15em] ${theme.nav}`}
                aria-label={item.ariaLabel}
              >
                {label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.15em] ${theme.nav}`}
                aria-label={item.ariaLabel}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="pointer-events-auto">
        <LocaleToggle />
      </div>
    </div>
  );
}
