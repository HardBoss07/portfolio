"use client";

import { useState, useEffect, useCallback } from "react";

export type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  externalMedia: boolean;
};

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  externalMedia: false,
};

const CONSENT_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-updated";

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadConsent = useCallback(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed === "object" && parsed !== null) {
          setConsent({ ...DEFAULT_CONSENT, ...parsed, necessary: true });
        }
      } catch (e) {
        if (saved === "all") {
          setConsent({ necessary: true, analytics: true, externalMedia: true });
        }
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    loadConsent();

    const handleUpdate = () => loadConsent();
    window.addEventListener(CONSENT_EVENT, handleUpdate);
    return () => window.removeEventListener(CONSENT_EVENT, handleUpdate);
  }, [loadConsent]);

  const updateConsent = (newConsent: Partial<ConsentState>) => {
    const updated = { ...consent, ...newConsent, flag: Date.now() }; // Flag to force update if nested
    const finalConsent = {
      necessary: true,
      analytics: !!updated.analytics,
      externalMedia: !!updated.externalMedia,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(finalConsent));
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  };

  return {
    consent,
    isInitialized,
    updateConsent,
    resetConsent,
    isFirstVisit: isInitialized && !localStorage.getItem(CONSENT_KEY),
  };
}
