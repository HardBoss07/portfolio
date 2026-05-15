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
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="border-4 border-primary bg-surface-dim text-on-surface p-8 rounded-xl max-w-2xl w-full shadow-[0_0_50px_rgba(255,176,202,0.2)] overflow-y-auto max-h-[90vh]">
        <div className="flex justify-end gap-4 mb-6">
          {(["DE", "EN"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`text-label-mono font-bold transition-all ${
                activeLang === lang
                  ? "text-primary scale-110"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
