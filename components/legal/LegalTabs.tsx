type LegalTabsProps = {
  activeLocale: "DE" | "EN";
  onLocaleChange: (locale: "DE" | "EN") => void;
};

export function LegalTabs({ activeLocale, onLocaleChange }: LegalTabsProps) {
  return (
    <div className="flex gap-4 mb-12">
      {(["DE", "EN"] as const).map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`px-6 py-2 rounded-pill text-label-mono font-bold transition-all active:scale-95 ${
            activeLocale === locale
              ? "bg-primary text-on-primary"
              : "border-2 border-outline-variant text-text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          {locale === "DE" ? "DEUTSCH" : "ENGLISH"}
        </button>
      ))}
    </div>
  );
}
