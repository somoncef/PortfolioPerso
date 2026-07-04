"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale } from "@/context/locale-provider";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export function LanguageSwitcher() {
  const { locale, setLocale, data } = useLocale();
  const nextLocale: Locale = locale === "fr" ? "en" : "fr";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={() => setLocale(nextLocale)}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12 text-xs font-semibold"
          )}
          aria-label={`${data.ui.language}: ${LOCALE_LABELS[nextLocale]}`}
        >
          {LOCALE_LABELS[nextLocale]}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {data.ui.language}: {LOCALE_LABELS[nextLocale]}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
