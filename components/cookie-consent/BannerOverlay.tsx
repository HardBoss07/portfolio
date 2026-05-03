import React from "react";
import styles from "@/styles/BannerOverlay.module.css";
import { BannerOverlayProps, Language } from "@/types/components/BannerOverlay";

export function BannerOverlay({
  children,
  onLanguageChange,
  activeLang,
}: BannerOverlayProps) {
  const languages: Language[] = ["DE", "EN"];

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.languageSwitcher}>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`${styles.langButton} ${
                activeLang === lang ? styles.langButtonActive : styles.langButtonInactive
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
