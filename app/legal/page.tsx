"use client";

import { useState, useEffect } from "react";
import { LEGAL_CONTENT } from "@/lib/legal-content";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalTabs } from "@/components/legal/LegalTabs";
import { LegalSection } from "@/components/legal/LegalSection";
import { useConsent } from "@/hooks/useConsent";

export default function LegalPage() {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const { resetConsent } = useConsent();

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0].toUpperCase();
    if (browserLang === "EN") setLang("EN");
  }, []);

  const content = LEGAL_CONTENT[lang];

  const renderContent = (type: "impressum" | "privacy") => {
    const data = content[type];
    return (
      <section key={type}>
        <h1 className="text-4xl font-bold mb-8 text-[#F207A8]">{data.title}</h1>
        <div className="space-y-8">
          {data.sections.map((section, index) => (
            <LegalSection
              key={index}
              title={section.title}
              isNotice={section.isNotice}
            >
              {Array.isArray(section.content) ? (
                <ul
                  className={`${section.isDataProcessor ? "space-y-4 mt-2" : ""}`}
                >
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className={`${section.isDataProcessor ? "border-l-4 border-[#F207A8] pl-4" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {section.hasResetButton && (
                <button
                  onClick={resetConsent}
                  className="mt-4 border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg hover:bg-[#F207A8] hover:text-black transition-colors"
                >
                  {lang === "DE"
                    ? "Cookie-Einstellungen zurücksetzen"
                    : "Reset Cookie Preferences"}
                </button>
              )}
            </LegalSection>
          ))}
        </div>
      </section>
    );
  };

  return (
    <LegalLayout
      tabs={<LegalTabs activeLocale={lang} onLocaleChange={setLang} />}
    >
      {renderContent("impressum")}
      {renderContent("privacy")}
    </LegalLayout>
  );
}
