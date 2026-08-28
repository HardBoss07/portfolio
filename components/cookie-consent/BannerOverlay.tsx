import React from "react";

type BannerOverlayProps = {
  children: React.ReactNode;
  onLanguageChange: (lang: "DE" | "EN") => void;
  activeLang: "DE" | "EN";
};

export function BannerOverlay({
  children,
  onLanguageChange,
  activeLang,
}: BannerOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="border-2 border-primary bg-surface-container text-on-surface p-8 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center border-b border-outline-variant pb-4 mb-6">
          <div className="flex gap-4">
            {(["DE", "EN"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`text-label-mono text-xs font-bold transition-all ${
                  activeLang === lang
                    ? "text-primary border-b border-primary"
                    : "text-text-secondary hover:text-white"
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
