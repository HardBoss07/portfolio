import { PUBLISHER_DATA } from "./consts";

export type LegalSectionData = {
  title: string;
  content: string | string[];
  isNotice?: boolean;
  isDataProcessor?: boolean;
  hasResetButton?: boolean;
};

export type LegalContent = {
  impressum: {
    title: string;
    sections: LegalSectionData[];
  };
  privacy: {
    title: string;
    sections: LegalSectionData[];
  };
};

export const LEGAL_CONTENT: Record<"DE" | "EN", LegalContent> = {
  DE: {
    impressum: {
      title: "Impressum",
      sections: [
        {
          title: "Kontaktadresse",
          content: [
            PUBLISHER_DATA.name,
            PUBLISHER_DATA.address,
            "Schweiz",
            `E-Mail: ${PUBLISHER_DATA.email}`,
            ],
            },
            {
            title: "Haftungsausschluss",
          content:
            "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstehen, werden ausgeschlossen.",
        },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      sections: [
        {
          title: "1. Verantwortliche Stelle",
          content: [
            PUBLISHER_DATA.name,
            PUBLISHER_DATA.address,
            `E-Mail: ${PUBLISHER_DATA.email}`,
          ],
        },
        {
          title: "2. Zweck der Datenerfassung",
          content: [
            "Analyse der Website-Nutzung zur Optimierung unseres Angebots.",
            "Anzeige externer Medien (YouTube-Videos).",
          ],
        },
        {
          title: "3. Datenverarbeiter (Drittanbieter)",
          content: [
            "Vercel (Hosting & Analytics): Die Website wird bei Vercel gehostet. Vercel Analytics wird nur nach expliziter Zustimmung zur Datenverkehr-Analyse verwendet.",
            "YouTube (Externe Medien): Wir betten YouTube-Videos ein. Diese werden erst geladen, wenn Sie der Kategorie 'Externe Medien' zugestimmt haben.",
          ],
          isDataProcessor: true,
        },
        {
          title: "4. Schriftarten (Fonts)",
          content:
            "Diese Website nutzt Web Fonts, die über next/font/google bereitgestellt werden. Diese Schriftarten sind selbstgehostet. Es erfolgt keine Verbindung zu Google-Servern und es werden keine Daten an Google für die Darstellung der Schriftarten übertragen.",
        },
        {
          title: "5. Ihre Rechte",
          content:
            "Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten. Sie können Ihre Cookie-Einstellungen jederzeit über den folgenden Button zurücksetzen:",
          hasResetButton: true,
        },
      ],
    },
  },
  EN: {
    impressum: {
      title: "Legal Notice",
      sections: [
        {
          title: "Contact Address",
          content: [
            PUBLISHER_DATA.name,
            PUBLISHER_DATA.address,
            "Switzerland",
            `Email: ${PUBLISHER_DATA.email}`,
          ],
        },
        {
          title: "Disclaimer",
          content:
            "The author assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information. Liability claims against the author for material or immaterial damage resulting from access to or use or non-use of the published information are excluded.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data Controller",
          content: [
            PUBLISHER_DATA.name,
            PUBLISHER_DATA.address,
            `Email: ${PUBLISHER_DATA.email}`,
          ],
        },
        {
          title: "2. Purpose of Data Collection",
          content: [
            "Analysis of website usage to optimize our services.",
            "Displaying external media (YouTube videos).",
          ],
        },
        {
          title: "3. Data Processors (Third Parties)",
          content: [
            "Vercel (Hosting & Analytics): The website is hosted by Vercel. Vercel Analytics is only used after explicit consent for traffic analysis.",
            "YouTube (External Media): We embed YouTube videos. These are only loaded if you have agreed to the 'External Media' category.",
          ],
          isDataProcessor: true,
        },
        {
          title: "4. Fonts",
          content:
            "This website uses Web Fonts provided via next/font/google. These fonts are self-hosted. No connection is established with Google servers, and no data is shared with Google for font rendering.",
        },
        {
          title: "5. Your Rights",
          content:
            "You have the right to information, correction, or deletion of your data. You can reset your cookie preferences at any time using the button below:",
          hasResetButton: true,
        },
      ],
    },
  },
};
