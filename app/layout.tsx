import "./globals.css";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";
import { helveticaNeue, mixtaPro } from "./fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AutoThemeProvider from "@/components/providers/theme/auto-theme-provider";
import DesktopNavbar from "@/components/nav/DesktopNavbar";
import MobileNavbar from "@/components/nav/MobileNavbar";
import WithLove from "@/components/nav/WithLove.tsx";
import { getServerLocale } from "@/lib/i18n-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valmar",
  description: "Product & Experience Design",
  icons: {
    icon: "/media/globo.png",           // Standard favicon
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", // iOS
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/media/globo.png",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getServerLocale();

  return (
    <html lang={locale}>
      <head>
        <script src="/shaders/glslcanvas.min.js" async />
      </head>
      <body
        className={`
          ${helveticaNeue.className}
          ${mixtaPro.variable}
          min-h-screen 
          bg-[#f5f4ed]
        `}
        // style={{ backgroundImage: "url('/media/sky2.png')" bg-cover bg-center bg-no-repeat}}
      >
        {/* Background layer */}
        
        <div className="fixed inset-0 -z-10" />
        <AutoThemeProvider>
          <DesktopNavbar />
          <MobileNavbar />
          {/* App content */}
          <SmoothScroll>{children}</SmoothScroll>
          <WithLove />
        </AutoThemeProvider>
      </body>
    </html>
  );
}
