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
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="border-2 border-[#F207A8] bg-black text-[#F207A8] p-6 rounded-lg max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-end gap-2 mb-4">
          {(["DE", "EN"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`text-sm font-bold ${activeLang === lang ? "underline" : "opacity-50"}`}
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
