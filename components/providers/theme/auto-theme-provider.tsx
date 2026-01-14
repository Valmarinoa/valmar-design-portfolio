"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/providers/theme-context";
import { themeFromPathname } from "./route-theme";

export default function AutoThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const themeKey = useMemo(() => themeFromPathname(pathname), [pathname]);

  return <ThemeProvider themeKey={themeKey}>{children}</ThemeProvider>;
}
