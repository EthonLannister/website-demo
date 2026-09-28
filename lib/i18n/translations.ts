import { SupportedLang, TranslationDictionary } from './types';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { es } from './locales/es';
import { ar } from './locales/ar';

export type { SupportedLang, TranslationDictionary } from './types';

export const TRANSLATIONS: Record<SupportedLang, TranslationDictionary> = {
  en,
  zh,
  de,
  fr,
  es,
  ar,
};
