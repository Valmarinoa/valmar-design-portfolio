import type { ThemeKey } from "@/data/projects";

export function themeFromPathname(pathname: string): ThemeKey {
  const p = (pathname || "/").toLowerCase();

  // homepage: "", "/" (and optionally "/?x=y" if you ever pass that in)
  if (p === "" || p === "/") return "home";

  if (p.startsWith("/rurales")) return "rurales";
  if (p.startsWith("/totemica")) return "totemica";

  return "home"; // default
}