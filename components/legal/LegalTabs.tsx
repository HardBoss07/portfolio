type LegalTabsProps = {
  activeLocale: "DE" | "EN";
  onLocaleChange: (locale: "DE" | "EN") => void;
};

export function LegalTabs({ activeLocale, onLocaleChange }: LegalTabsProps) {
  return (
    <div className="flex gap-3 mb-8 border-b border-outline-variant pb-4">
      {(["DE", "EN"] as const).map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`px-6 py-2.5 text-label-mono text-xs uppercase font-bold transition-all border-2 active:scale-95 ${
            activeLocale === locale
              ? "bg-primary text-black border-primary"
              : "border-outline-variant text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-bright"
          }`}
        >
          {locale === "DE" ? "DEUTSCH" : "ENGLISH"}
        </button>
      ))}
    </div>
  );
}
