"use client";

import { useTheme } from "@/components/providers/theme-context";
import { getMessages } from "@/data/messages";
import useLocale from "@/lib/use-locale";

export default function WithLove() {
  const { theme } = useTheme();
  const locale = useLocale();
  const messages = getMessages(locale);

  return (
    <div>
      <div className="fixed bottom-0 left-1/2 -translate-x-[50%] z-9995">
        <p className={`text-xs ${theme.love} px-3 pt-2 pb-1`}>{messages.footer.withLove}</p>
      </div>
    </div>
  );
}
