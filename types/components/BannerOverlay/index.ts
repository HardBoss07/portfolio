import React from "react";

export type Language = "DE" | "EN";

export interface BannerOverlayProps {
  children: React.ReactNode;
  onLanguageChange: (lang: Language) => void;
  activeLang: Language;
}
