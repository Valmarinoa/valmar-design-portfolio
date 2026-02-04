export const DEFAULT_LOCALE = "en" as const;
export const LOCALES = ["en", "pt-br"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "pt-br";
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  const normalized = pathname.toLowerCase();

  if (normalized === "/pt-br" || normalized.startsWith("/pt-br/")) {
    return "pt-br";
  }

  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string): string {
  if (!pathname) return "/";
  if (pathname === "/pt-br") return "/";
  if (pathname.startsWith("/pt-br/")) return pathname.replace("/pt-br", "");
  return pathname;
}

export function localizePath(pathname: string, locale: Locale): string {
  const basePath = stripLocaleFromPathname(pathname);
  if (locale === "pt-br") {
    return basePath === "/" ? "/pt-br" : `/pt-br${basePath}`;
  }
  return basePath;
}
