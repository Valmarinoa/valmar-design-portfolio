"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { ThemeKey } from "@/data/projects";
import { getTheme } from "@/data/projects";

export type ThemeClasses = { text: string; bg: string; border: string, mobileModalBg: string, logo: string, nav: string };

type ThemeContextValue = {
  themeKey: ThemeKey;
  theme: ThemeClasses;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  themeKey,
  children,
}: {
  themeKey: ThemeKey;
  children: React.ReactNode;
}) {
  const theme = useMemo(() => getTheme(themeKey), [themeKey]);

  const value = useMemo(
    () => ({ themeKey, theme }),
    [themeKey, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider />");
  }
  return ctx;
}
