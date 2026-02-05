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

  const renderDot = (active: boolean) => (
    <span
      aria-hidden="true"
      className={`inline-block h-1.5 w-1.5 rounded-full bg-current transition-opacity ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">

      <button
        type="button"
        onClick={() => handleLocaleChange("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${theme.nav} ${locale === "en" ? "font-semibold" : "opacity-60"}`}
      >
        <div className="items-center gap-1.5 overflow-visible h-[15px]">
          EN
         <div>{renderDot(locale === "en")}</div> 
        </div>
      </button>
      <span className={`${theme.nav} opacity-60`}>|</span>
      <button
        type="button"
        onClick={() => handleLocaleChange("pt-br")}
        aria-current={locale === "pt-br" ? "true" : undefined}
        className={`${theme.nav} ${locale === "pt-br" ? "font-semibold" : "opacity-60"}`}
      >
        <div className="items-center gap-1.5 overflow-visible h-[15px]">
         PT
         <div>{renderDot(locale === "pt-br")}</div> 
        </div>
      </button>
      <span className={`${theme.nav} opacity-60`}>|</span>
      <button
        type="button"
        onClick={() => handleLocaleChange("es")}
        aria-current={locale === "es" ? "true" : undefined}
        className={`${theme.nav} ${locale === "es" ? "font-semibold" : "opacity-60"}`}
      >
        <div className="items-center gap-1.5 overflow-visible h-[15px]">
          ES
          <div>{renderDot(locale === "es")}</div> 
        </div>
      </button>
    </div>
  );
}
