import type { Locale } from "@/lib/i18n/types";
import { en } from "./content/en";
import { fr } from "./content/fr";

export type ResumeData = typeof fr;

const RESUME_BY_LOCALE: Record<Locale, ResumeData> = {
  fr,
  en,
};

export function getResumeData(locale: Locale): ResumeData {
  return RESUME_BY_LOCALE[locale];
}

export const DATA = fr;
