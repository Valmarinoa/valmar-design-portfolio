"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LogoSvg from "@/components/svg/LogoSvg";
import { useTheme } from "@/components/providers/theme-context";
import useLocale from "@/lib/use-locale";
import { getMessages } from "@/data/messages";
import { localizePath } from "@/lib/i18n";
import LocaleToggle from "@/components/nav/LocaleToggle";

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || /^mailto:/i.test(url);
}

const easeOutElegant = [0.22, 1, 0.36, 1] as const;

export default function DesktopNavbar() {
  const { theme } = useTheme();
  const locale = useLocale();
  const messages = getMessages(locale);
  const menuItems = messages.nav.items.map((item) => ({
    ...item,
    href: isExternalUrl(item.href) ? item.href : localizePath(item.href, locale),
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.9, 
        ease: easeOutElegant,
        staggerChildren: 0.06,
        delayChildren: 0.15
      }}
      className={`hidden  fixed top-0 left-0 right-0 z-9997 px-8 py-6 items-center justify-between pointer-events-none mix-blend-exclusion ${theme.nav}`}
    >
      {/* Logo */}
      <motion.div 
        className="flex items-center gap-10 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutElegant, delay: 0.1 }}
      >
        <Link href={localizePath("/", locale)} aria-label={messages.nav.logoAria}>
          <LogoSvg className={`h-6 w-auto`} />
        </Link>
        
        <nav className="flex items-center gap-6">
          {menuItems.map((item, index) => {
            const isExternal = isExternalUrl(item.href);

            const linkContent = (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: easeOutElegant,
                  delay: 0.2 + (index * 0.05) // Staggered delay
                }}
                className="inline-block text-xs uppercase tracking-widest"
              >
                {item.label}
              </motion.span>
            );

            return isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest"
                aria-label={item.ariaLabel}
              >
                {linkContent}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest"
                aria-label={item.ariaLabel}
              >
                {linkContent}
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {/* Locale Toggle */}
      <motion.div 
        className="pointer-events-auto"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOutElegant, delay: 0.5 }}
      >
        <LocaleToggle />
      </motion.div>
    </motion.div>
  );
}