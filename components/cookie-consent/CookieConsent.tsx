"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useConsent, ConsentState } from "@/hooks/useConsent";
import { BannerOverlay } from "@/components/cookie-consent/BannerOverlay";
import { BannerActionButtons } from "@/components/cookie-consent/BannerActionButtons";
import { PreferenceToggle } from "@/components/cookie-consent/PreferenceToggle";

type Language = "DE" | "EN";

const TRANSLATIONS = {
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
          <h2 className="text-headline-h2 font-bold mb-4 uppercase">
            {t.title}
          </h2>
          <p className="text-body-md mb-6 leading-relaxed text-text-secondary">
            {t.description}
          </p>
          <p className="text-label-mono mb-8 text-text-secondary/70">
            {t.moreInfo}{" "}
            <Link
              href="/legal"
              className="text-primary underline hover:text-primary-container"
            >
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
          <h2 className="text-headline-h2 font-bold mb-6 uppercase">
            {t.settingsTitle}
          </h2>
          <div className="space-y-6 mb-8">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-4">
            <button
              onClick={() => setShowSettings(false)}
              className="text-label-mono font-bold text-text-secondary hover:text-primary transition-colors"
            >
              {t.btnBack}
            </button>
            <button
              onClick={handleSaveSettings}
              className="bg-primary text-on-primary px-8 py-2 rounded-pill text-label-mono uppercase font-bold active:scale-95 transition-transform hover:brightness-110 w-full sm:w-auto"
            >
              {t.btnSave}
            </button>
          </div>
        </>
      )}
    </BannerOverlay>
  );
}
