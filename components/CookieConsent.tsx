"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useConsent, ConsentState } from "@/hooks/useConsent";
import { BannerOverlay } from "./cookie-consent/BannerOverlay";
import { BannerActionButtons } from "./cookie-consent/BannerActionButtons";
import { PreferenceToggle } from "./cookie-consent/PreferenceToggle";
import { Language, Translations } from "@/types/components/CookieConsent";

const TRANSLATIONS: Translations = {
  DE: {
    title: "Cookie-Einstellungen",
    description:
      "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Einige sind notwendig für den Betrieb der Website, andere helfen uns, Nutzungsmuster zu analysieren oder externe Medien (wie YouTube) anzuzeigen.",
    moreInfo: "Weitere Informationen finden Sie in unserem",
    legalNotice: "Impressum & Datenschutz",
    btnLabels: {
      accept: "Alle akzeptieren",
      reject: "Alle ablehnen",
      settings: "Einstellungen",
    },
    settingsTitle: "Individuelle Einstellungen",
    catNecessary: "Notwendig",
    catNecessaryDesc:
      "Diese Cookies sind für den technischen Betrieb der Website erforderlich (z.B. Speicherung Ihrer Einwilligung).",
    catAnalytics: "Analyse",
    catAnalyticsDesc:
      "Ermöglicht uns die Analyse der Website-Nutzung zur Verbesserung unseres Angebots (Vercel Analytics).",
    catMedia: "Externe Medien",
    catMediaDesc:
      "Ermöglicht das Anzeigen von Inhalten externer Anbieter (z.B. YouTube-Videos).",
    btnBack: "Zurück",
    btnSave: "Auswahl speichern",
  },
  EN: {
    title: "Cookie Settings",
    description:
      "We use cookies to improve your experience. Some are necessary for the operation of the website, others help us analyze usage patterns or display external media (such as YouTube).",
    moreInfo: "Further information can be found in our",
    legalNotice: "Legal Notice & Privacy Policy",
    btnLabels: {
      accept: "Accept All",
      reject: "Reject All",
      settings: "Preferences",
    },
    settingsTitle: "Individual Settings",
    catNecessary: "Necessary",
    catNecessaryDesc:
      "These cookies are required for the technical operation of the website (e.g., storing your consent).",
    catAnalytics: "Analytics",
    catAnalyticsDesc:
      "Allows us to analyze website usage to improve our services (Vercel Analytics).",
    catMedia: "External Media",
    catMediaDesc:
      "Allows the display of content from third-party providers (e.g., YouTube videos).",
    btnBack: "Back",
    btnSave: "Save Selection",
  },
};

export default function CookieConsent() {
  const { consent, updateConsent, isFirstVisit } = useConsent();
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [lang, setLang] = useState<Language>("DE");
  const [tempConsent, setTempConsent] = useState<ConsentState>(consent);

  useEffect(() => {
    if (isFirstVisit) setVisible(true);
    setTempConsent(consent);
  }, [isFirstVisit, consent]);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0].toUpperCase();
    if (browserLang === "EN") setLang("EN");
  }, []);

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, externalMedia: true };
    updateConsent(all);
    setVisible(false);
  };

  const handleRejectAll = () => {
    const none = { necessary: true, analytics: false, externalMedia: false };
    updateConsent(none);
    setVisible(false);
  };

  const handleSaveSettings = () => {
    updateConsent(tempConsent);
    setVisible(false);
  };

  if (!visible) return null;

  const t = TRANSLATIONS[lang];

  return (
    <BannerOverlay activeLang={lang} onLanguageChange={setLang}>
      {!showSettings ? (
        <>
          <h2 className="CookieConsent_title">{t.title}</h2>
          <p className="CookieConsent_description">{t.description}</p>
          <p className="CookieConsent_moreInfo">
            {t.moreInfo}{" "}
            <Link href="/legal" className="CookieConsent_legalNoticeLink">
              {t.legalNotice}
            </Link>
            .
          </p>
          <BannerActionButtons
            labels={t.btnLabels}
            onAcceptAll={handleAcceptAll}
            onRejectAll={handleRejectAll}
            onShowSettings={() => setShowSettings(true)}
          />
        </>
      ) : (
        <>
          <h2 className="CookieConsent_settingsTitle">{t.settingsTitle}</h2>
          <div className="CookieConsent_settingsList">
            <PreferenceToggle
              label={t.catNecessary}
              description={t.catNecessaryDesc}
              checked={true}
              disabled
            />
            <PreferenceToggle
              label={t.catAnalytics}
              description={t.catAnalyticsDesc}
              checked={tempConsent.analytics}
              onChange={(val) =>
                setTempConsent({ ...tempConsent, analytics: val })
              }
            />
            <PreferenceToggle
              label={t.catMedia}
              description={t.catMediaDesc}
              checked={tempConsent.externalMedia}
              onChange={(val) =>
                setTempConsent({ ...tempConsent, externalMedia: val })
              }
            />
          </div>
          <div className="CookieConsent_actionsContainer">
            <button
              onClick={() => setShowSettings(false)}
              className="CookieConsent_backButton"
            >
              {t.btnBack}
            </button>
            <button onClick={handleSaveSettings} className="CookieConsent_saveButton">
              {t.btnSave}
            </button>
          </div>
        </>
      )}
    </BannerOverlay>
  );
}
