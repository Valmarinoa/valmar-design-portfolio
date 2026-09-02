import "./globals.css";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";
import { Baskervville, Be_Vietnam_Pro } from "next/font/google";
import AutoThemeProvider from "@/components/providers/theme/auto-theme-provider";
import MobileNavbar from "@/components/nav/MobileNavbar";
import { getServerLocale } from "@/lib/i18n-server";
import { Metadata } from "next";
import MobileFooter from "@/components/MobileFooter";
import { LandingScrollProvider } from "@/components/providers/LandingScrollContext";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"], 
  style: ["normal", "italic"],
  variable: "--font-baskervville",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valmar",
  description: "Product & Experience Designer",
  icons: {
    icon: "/media/globo.png",
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
    <html lang={locale} className={`${baskervville.variable} ${beVietnamPro.variable}`}>
      <head>
        <script src="/shaders/glslcanvas.min.js" async />
      </head>
      <body className={`...`}>
        <div className="fixed inset-0 -z-10" />
        <AutoThemeProvider>
          <LandingScrollProvider> 
            <MobileNavbar />
            {children}
            <MobileFooter/>
          </LandingScrollProvider>
        </AutoThemeProvider>
      </body>
    </html>
  );
}