// components/providers/LandingScrollContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LandingScrollContextType {
  hasScrolledPastHero: boolean;
  setHasScrolledPastHero: (value: boolean) => void;
  isLandingPage: boolean;
  setIsLandingPage: (value: boolean) => void;
  // Add scroll progress for more granular control
  scrollProgress: number;
  setScrollProgress: (value: number) => void;
}

const LandingScrollContext = createContext<LandingScrollContextType | undefined>(undefined);

export function LandingScrollProvider({ children }: { children: ReactNode }) {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <LandingScrollContext.Provider
      value={{
        hasScrolledPastHero,
        setHasScrolledPastHero,
        isLandingPage,
        setIsLandingPage,
        scrollProgress,
        setScrollProgress,
      }}
    >
      {children}
    </LandingScrollContext.Provider>
  );
}

export function useLandingScroll() {
  const context = useContext(LandingScrollContext);
  if (!context) throw new Error("useLandingScroll must be used within LandingScrollProvider");
  return context;
}