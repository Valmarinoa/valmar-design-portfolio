import { headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export async function getServerLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale");
  if (locale === "pt-br" || locale === "en" || locale === "es") {
    return locale;
  }
  return DEFAULT_LOCALE;
}
