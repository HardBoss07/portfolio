import React from "react";
import styles from "@/styles/BannerActionButtons.module.css";
import { BannerActionButtonsProps } from "@/types/components/BannerActionButtons";

export function BannerActionButtons({
  onAcceptAll,
  onRejectAll,
  onShowSettings,
  labels,
}: BannerActionButtonsProps) {
  return (
    <div className={styles.container}>
      <button
        onClick={onShowSettings}
        className={`${styles.buttonBase} ${styles.secondaryButton}`}
      >
        {labels.settings}
      </button>
      <button
        onClick={onRejectAll}
        className={`${styles.buttonBase} ${styles.secondaryButton}`}
      >
        {labels.reject}
      </button>
      <button
        onClick={onAcceptAll}
        className={`${styles.buttonBase} ${styles.primaryButton}`}
      >
        {labels.accept}
      </button>
    </div>
  );
}
