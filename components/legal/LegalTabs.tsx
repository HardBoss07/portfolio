type LegalTabsProps = {
  activeLocale: 'DE' | 'EN';
  onLocaleChange: (locale: 'DE' | 'EN') => void;
};

export function LegalTabs({ activeLocale, onLocaleChange }: LegalTabsProps) {
  return (
    <div className="border-outline-variant mb-8 flex gap-3 border-b pb-4">
      {(['DE', 'EN'] as const).map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`text-label-mono border-2 px-6 py-2.5 text-xs font-bold uppercase transition-all active:scale-95 ${
            activeLocale === locale
              ? 'bg-primary border-primary text-black'
              : 'border-outline-variant text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-bright'
          }`}
        >
          {locale === 'DE' ? 'DEUTSCH' : 'ENGLISH'}
        </button>
      ))}
    </div>
  );
}
