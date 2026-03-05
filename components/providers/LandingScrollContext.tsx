// components/providers/LandingScrollContext.tsx
"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface LandingScrollContextType {
  hasScrolledPastHero: boolean;
  setHasScrolledPastHero: (value: boolean) => void;
  isLandingPage: boolean;
  setIsLandingPage: (value: boolean) => void;
}

const LandingScrollContext = createContext<LandingScrollContextType | undefined>(undefined);

export function LandingScrollProvider({ children }: { children: ReactNode }) {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);

  return (
    <LandingScrollContext.Provider
      value={{
        hasScrolledPastHero,
        setHasScrolledPastHero,
        isLandingPage,
        setIsLandingPage,
      }}
    >
      {children}
    </LandingScrollContext.Provider>
  );
}

export function useLandingScroll() {
  const context = useContext(LandingScrollContext);
  if (!context) {
    throw new Error("useLandingScroll must be used within LandingScrollProvider");
  }
  return context;
}