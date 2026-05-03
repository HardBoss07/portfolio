"use client";

import React from "react";
import { useConsent } from "@/hooks/useConsent";
import styles from "./YoutubeWrapper.module.css";
import { YouTubeWrapperProps } from "@/types/components/YoutubeWrapper";

export default function YouTubeWrapper({ children }: YouTubeWrapperProps) {
  const { consent, updateConsent } = useConsent();

  if (consent.externalMedia) return <>{children}</>;

  return (
    <div className={styles.placeholder}>
      <p className={styles.notice}>
        Dieses Video erfordert Cookies von Drittanbietern (YouTube).
      </p>

      <button
        className={styles.acceptButton}
        onClick={() => updateConsent({ externalMedia: true })}
      >
        Video laden & Cookies akzeptieren
      </button>
    </div>
  );
}
