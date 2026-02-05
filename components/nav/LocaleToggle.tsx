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
  const handleLocaleChange = (nextLocale: "en" | "pt-br" | "es") => {
    const href = localizePath(pathname ?? "/", nextLocale);
    window.location.href = href;
  };

  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
      <button
        type="button"
        onClick={() => handleLocaleChange("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${theme.nav} ${locale === "en" ? "font-semibold underline underline-offset-4" : "opacity-60"}`}
      >
        EN
      </button>
      <span className={`${theme.nav} opacity-60`}>|</span>
      <button
        type="button"
        onClick={() => handleLocaleChange("pt-br")}
        aria-current={locale === "pt-br" ? "true" : undefined}
        className={`${theme.nav} ${locale === "pt-br" ? "font-semibold underline underline-offset-4" : "opacity-60"}`}
      >
        PT
      </button>
      <span className={`${theme.nav} opacity-60`}>|</span>
      <button
        type="button"
        onClick={() => handleLocaleChange("es")}
        aria-current={locale === "es" ? "true" : undefined}
        className={`${theme.nav} ${locale === "es" ? "font-semibold underline underline-offset-4" : "opacity-60"}`}
      >
        ES
      </button>
    </div>
  );
}
