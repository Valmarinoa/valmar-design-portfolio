import type { ThemeKey } from "@/data/projects";
import { stripLocaleFromPathname } from "@/lib/i18n";

export function themeFromPathname(pathname: string): ThemeKey {
  const raw = (pathname || "/").toLowerCase();
  const p = stripLocaleFromPathname(raw);

  // homepage: "", "/" (and optionally "/?x=y" if you ever pass that in)
  if (p === "" || p === "/") return "home";

  if (p.startsWith("/rurales")) return "rurales";
  if (p.startsWith("/totemica")) return "totemica";

  return "home"; // default
}
