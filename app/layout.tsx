import "./globals.css";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";
import { helveticaNeue, mixtaPro } from "./fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AutoThemeProvider from "@/components/providers/theme/auto-theme-provider";
import MobileNavbar from "@/components/nav/MobileNavbar";
import WithLove from "@/components/nav/WithLove.tsx";


export const metadata = {
  title: "Valmar",
  description: "Product & Experience Design",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${helveticaNeue.className}
          ${mixtaPro.variable}
          min-h-screen
        `}
      >
        {/* Background layer */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/sky2.png')" }}
        />
        <div className="fixed inset-0 -z-10" />

        <AutoThemeProvider>
          {/* ✅ persistent mobile navbar */}
          <MobileNavbar />
          {/* App content */}
          <SmoothScroll>{children}</SmoothScroll>
<WithLove />
        </AutoThemeProvider>
      </body>
    </html>
  );
}
