type LegalTabsProps = {
  activeLocale: "DE" | "EN";
  onLocaleChange: (locale: "DE" | "EN") => void;
};

export function LegalTabs({ activeLocale, onLocaleChange }: LegalTabsProps) {
  return (
    <div className="flex gap-8 border-b-2 border-[#F207A8]/30 mb-12">
      {(["DE", "EN"] as const).map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`pb-2 text-xl font-bold transition-all ${
            activeLocale === locale
              ? "text-[#F207A8] border-b-4 border-[#F207A8]"
              : "text-gray-500 hover:text-white"
          }`}
        >
          {locale === "DE" ? "Deutsch" : "English"}
        </button>
      ))}
    </div>
  );
}
