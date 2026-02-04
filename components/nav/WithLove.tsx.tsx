"use client";

import { useTheme } from "@/components/providers/theme-context";
import { getMessages } from "@/data/messages";
import useLocale from "@/lib/use-locale";

export default function MobileNavbar() {
  const { theme } = useTheme();
  const locale = useLocale();
  const messages = getMessages(locale);

  return (
    <div>
      {/* <FadeIn delay={1}> */}
        {/* Navbar ABOVE menu */}
        <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-[50%] z-9997 backdrop-blur-xl ">
        <p className={`text-xs ${theme.nav} px-3 pt-2 pb-1 mix-blend-exclusion `}>{messages.footer.withLove}</p>
        </div>
      {/* </FadeIn> */}

    </div>
  );
}
