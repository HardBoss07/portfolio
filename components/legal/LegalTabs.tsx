import React from "react";
import styles from "@/styles/LegalTabs.module.css";
import { LegalTabsProps, Locale } from "@/types/components/LegalTabs";

export function LegalTabs({ activeLocale, onLocaleChange }: LegalTabsProps) {
  const locales: Locale[] = ["DE", "EN"];

  return (
    <div className={styles.tabsContainer}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`${styles.tabButton} ${
            activeLocale === locale ? styles.tabButtonActive : styles.tabButtonInactive
          }`}
        >
          {locale === "DE" ? "Deutsch" : "English"}
        </button>
      ))}
    </div>
  );
}
