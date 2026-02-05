export const DEFAULT_LOCALE = "en" as const;
export const LOCALES = ["en", "pt-br", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "pt-br" || value === "es";
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  const normalized = pathname.toLowerCase();

  if (normalized === "/pt-br" || normalized.startsWith("/pt-br/")) return "pt-br";
  if (normalized === "/es" || normalized.startsWith("/es/")) return "es";

  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string): string {
  if (!pathname) return "/";
  if (pathname === "/pt-br") return "/";
  if (pathname.startsWith("/pt-br/")) return pathname.replace("/pt-br", "");
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.replace("/es", "");
  return pathname;
}

export function localizePath(pathname: string, locale: Locale): string {
  const basePath = stripLocaleFromPathname(pathname);
  if (locale === "pt-br") {
    return basePath === "/" ? "/pt-br" : `/pt-br${basePath}`;
  }
  if (locale === "es") {
    return basePath === "/" ? "/es" : `/es${basePath}`;
  }
  return basePath;
}
