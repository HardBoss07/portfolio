"use client";

import { useState } from "react";
import { PUBLISHER_DATA } from "@/lib/consts";

type Language = "DE" | "EN";

export default function LegalPage() {
  const [lang, setLang] = useState<Language>("DE");

  const ContentDE = () => (
    <div className="space-y-12">
      {/* Impressum */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-[#F207A8]">Impressum</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Kontaktadresse</h2>
            <p className="text-lg">
              {PUBLISHER_DATA.name}<br />
              {PUBLISHER_DATA.address}<br />
              Schweiz
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">E-Mail</h2>
            <p className="text-lg">{PUBLISHER_DATA.email}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstehen, werden ausgeschlossen.
            </p>
          </div>
        </div>
      </section>

      {/* Datenschutz */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-[#F207A8]">Datenschutzerklärung</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              {PUBLISHER_DATA.name}<br />
              {PUBLISHER_DATA.address}<br />
              E-Mail: {PUBLISHER_DATA.email}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">2. Zweck der Datenerfassung</h2>
            <p>Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Analyse der Website-Nutzung zur Optimierung unseres Angebots.</li>
              <li>Anzeige externer Medien (YouTube-Videos).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">3. Datenverarbeiter (Drittanbieter)</h2>
            <div className="space-y-4 mt-2">
              <p><strong>Vercel (Hosting & Analytics):</strong> Die Website wird bei Vercel gehostet. Vercel Analytics wird nur nach expliziter Zustimmung zur Datenverkehr-Analyse verwendet.</p>
              <p><strong>YouTube (Externe Medien):</strong> Wir betten YouTube-Videos ein. Diese werden erst geladen, wenn Sie der Kategorie "Externe Medien" zugestimmt haben.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">4. Schriftarten (Fonts)</h2>
            <p>
              Diese Website nutzt Web Fonts, die über <code>next/font/google</code> bereitgestellt werden. Diese Schriftarten sind selbstgehostet. Es erfolgt keine Verbindung zu Google-Servern und es werden keine Daten an Google für die Darstellung der Schriftarten übertragen.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("cookie-consent");
                window.location.reload();
              }}
              className="mt-4 border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg hover:bg-[#F207A8] hover:text-black transition-colors"
            >
              Cookie-Einstellungen zurücksetzen
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ContentEN = () => (
    <div className="space-y-12">
      {/* Legal Notice */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-[#F207A8]">Legal Notice</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Address</h2>
            <p className="text-lg">
              {PUBLISHER_DATA.name}<br />
              {PUBLISHER_DATA.address}<br />
              Switzerland
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Email</h2>
            <p className="text-lg">{PUBLISHER_DATA.email}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Disclaimer</h2>
            <p>
              The author assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information. Liability claims against the author for material or immaterial damage resulting from access to or use or non-use of the published information are excluded.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-[#F207A8]">Privacy Policy</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Data Controller</h2>
            <p>
              Responsible for data processing on this website is:<br />
              {PUBLISHER_DATA.name}<br />
              {PUBLISHER_DATA.address}<br />
              Email: {PUBLISHER_DATA.email}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">2. Purpose of Data Collection</h2>
            <p>We process personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Analysis of website usage to optimize our services.</li>
              <li>Displaying external media (YouTube videos).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">3. Data Processors (Third Parties)</h2>
            <div className="space-y-4 mt-2">
              <p><strong>Vercel (Hosting & Analytics):</strong> The website is hosted by Vercel. Vercel Analytics is only used after explicit consent for traffic analysis.</p>
              <p><strong>YouTube (External Media):</strong> We embed YouTube videos. These are only loaded if you have agreed to the "External Media" category.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">4. Fonts</h2>
            <p>
              This website uses Web Fonts provided via <code>next/font/google</code>. These fonts are self-hosted. No connection is established with Google servers, and no data is shared with Google for font rendering.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("cookie-consent");
                window.location.reload();
              }}
              className="mt-4 border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg hover:bg-[#F207A8] hover:text-black transition-colors"
            >
              Reset Cookie Preferences
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto border-2 border-[#F207A8] p-8 bg-black shadow-2xl">
        {/* Language Tabs */}
        <div className="flex gap-8 border-b-2 border-[#F207A8]/30 mb-12">
          <button
            onClick={() => setLang("DE")}
            className={`pb-2 text-xl font-bold transition-all ${
              lang === "DE"
                ? "text-[#F207A8] border-b-4 border-[#F207A8]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Deutsch
          </button>
          <button
            onClick={() => setLang("EN")}
            className={`pb-2 text-xl font-bold transition-all ${
              lang === "EN"
                ? "text-[#F207A8] border-b-4 border-[#F207A8]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            English
          </button>
        </div>

        {lang === "DE" ? <ContentDE /> : <ContentEN />}
      </div>
    </main>
  );
}
