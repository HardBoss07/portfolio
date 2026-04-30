"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  externalMedia: boolean;
};

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  externalMedia: false,
};

type Language = "DE" | "EN";

const TRANSLATIONS = {
  DE: {
    title: "Cookie-Einstellungen",
    description:
      "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Einige sind notwendig für den Betrieb der Website, andere helfen uns, Nutzungsmuster zu analysieren oder externe Medien (wie YouTube) anzuzeigen.",
    moreInfo: "Weitere Informationen finden Sie in unserem",
    legalNotice: "Impressum & Datenschutz",
    btnSettings: "Einstellungen",
    btnReject: "Alle ablehnen",
    btnAccept: "Alle akzeptieren",
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
    btnSettings: "Preferences",
    btnReject: "Reject All",
    btnAccept: "Accept All",
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
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [lang, setLang] = useState<Language>("DE");
  const [tempConsent, setTempConsent] = useState<ConsentState>(DEFAULT_CONSENT);

  useEffect(() => {
    // Detect language
    const browserLang = navigator.language.split("-")[0].toUpperCase();
    if (browserLang === "EN") setLang("EN");

    const saved = localStorage.getItem("cookie-consent");
    if (!saved) {
      setOpen(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed === "object" && parsed !== null) {
          setTempConsent({ ...DEFAULT_CONSENT, ...parsed, necessary: true });
        }
      } catch (e) {
        // Migration from old format
        if (saved === "all") {
          setTempConsent({
            necessary: true,
            analytics: true,
            externalMedia: true,
          });
        }
      }
    }
  }, []);

  const save = (consent: ConsentState) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setOpen(false);
  };

  const acceptAll = () => {
    const all = { necessary: true, analytics: true, externalMedia: true };
    setTempConsent(all);
    save(all);
  };

  const rejectAll = () => {
    const none = { necessary: true, analytics: false, externalMedia: false };
    setTempConsent(none);
    save(none);
  };

  const t = TRANSLATIONS[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="border-2 border-[#F207A8] bg-black text-[#F207A8] p-6 rounded-lg max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Language Toggle */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setLang("DE")}
            className={`text-sm font-bold ${lang === "DE" ? "underline" : "opacity-50"}`}
          >
            DE
          </button>
          <button
            onClick={() => setLang("EN")}
            className={`text-sm font-bold ${lang === "EN" ? "underline" : "opacity-50"}`}
          >
            EN
          </button>
        </div>

        {!showSettings ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
            <p className="text-lg mb-6 leading-relaxed">{t.description}</p>
            <p className="text-sm mb-8 opacity-80">
              {t.moreInfo}{" "}
              <Link href="/legal" className="underline hover:text-white">
                {t.legalNotice}
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-4">
              <button
                onClick={() => setShowSettings(true)}
                className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg transition-colors hover:bg-[#F207A8]/10"
              >
                {t.btnSettings}
              </button>
              <button
                onClick={rejectAll}
                className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg transition-colors hover:bg-[#F207A8]/10"
              >
                {t.btnReject}
              </button>
              <button
                onClick={acceptAll}
                className="border-2 border-[#F207A8] px-6 py-2 rounded-full bg-[#F207A8] text-black text-lg font-bold transition-colors hover:bg-black hover:text-[#F207A8]"
              >
                {t.btnAccept}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">{t.settingsTitle}</h2>

            <div className="space-y-6 mb-8">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{t.catNecessary}</h3>
                  <p className="text-sm opacity-80">{t.catNecessaryDesc}</p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed">
                  <div className="w-11 h-6 bg-[#F207A8] rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[23px] after:bg-black after:rounded-full after:h-5 after:w-5"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{t.catAnalytics}</h3>
                  <p className="text-sm opacity-80">{t.catAnalyticsDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempConsent.analytics}
                    onChange={(e) =>
                      setTempConsent({
                        ...tempConsent,
                        analytics: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#F207A8] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              {/* External Media */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{t.catMedia}</h3>
                  <p className="text-sm opacity-80">{t.catMediaDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempConsent.externalMedia}
                    onChange={(e) =>
                      setTempConsent({
                        ...tempConsent,
                        externalMedia: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#F207A8] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-4">
              <button
                onClick={() => setShowSettings(false)}
                className="text-lg underline hover:text-white"
              >
                {t.btnBack}
              </button>
              <button
                onClick={() => save(tempConsent)}
                className="border-2 border-[#F207A8] px-6 py-2 rounded-full bg-[#F207A8] text-black text-lg font-bold transition-colors hover:bg-black hover:text-[#F207A8] w-full sm:w-auto"
              >
                {t.btnSave}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
