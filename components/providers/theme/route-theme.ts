import type { ThemeKey } from "@/data/projects";

export function themeFromPathname(pathname: string): ThemeKey {
  const p = (pathname || "/").toLowerCase();

  if (p.startsWith("/rurales")) return "rurales";
  if (p.startsWith("/totemica")) return "totemica";

  return "totemica"; // default
}
