import { headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export function getServerLocale(): Locale {
  const headerStore = headers();
  const locale = headerStore.get("x-locale");
  if (locale === "pt-br" || locale === "en") {
    return locale;
  }
  return DEFAULT_LOCALE;
}
