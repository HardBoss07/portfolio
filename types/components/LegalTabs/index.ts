export type Locale = "DE" | "EN";

export interface LegalTabsProps {
  activeLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}
