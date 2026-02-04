"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath } from "@/lib/i18n";
import useLocale from "@/lib/use-locale";
import { useTheme } from "@/components/providers/theme-context";

export default function LocaleToggle() {
  const pathname = usePathname();
  const locale = useLocale();
  const { theme } = useTheme();

  const nextLocale = locale === "pt-br" ? "en" : "pt-br";
  const label = locale === "pt-br" ? "EN" : "PT";
  const href = localizePath(pathname ?? "/", nextLocale);

  return (
    <Link
      href={href}
      aria-label={`Switch language to ${nextLocale === "pt-br" ? "Português" : "English"}`}
      className={`text-xs uppercase tracking-[0.2em] ${theme.nav}`}
    >
      {label}
    </Link>
  );
}
