import React from 'react';

type BannerOverlayProps = {
  children: React.ReactNode;
  onLanguageChange: (lang: 'DE' | 'EN') => void;
  activeLang: 'DE' | 'EN';
};

export function BannerOverlay({ children, onLanguageChange, activeLang }: BannerOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 p-4 backdrop-blur-sm sm:items-center">
      <div className="border-primary bg-surface-container text-on-surface max-h-[90vh] w-full max-w-2xl overflow-y-auto border-2 p-8">
        <div className="border-outline-variant mb-6 flex items-center justify-between border-b pb-4">
          <div className="flex gap-4">
            {(['DE', 'EN'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`text-label-mono text-xs font-bold transition-all ${
                  activeLang === lang
                    ? 'text-primary border-primary border-b'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
