import type { Metadata, Viewport } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/cookie-consent/CookieConsent";
import Header from "@/components/Header";
import {
  jsonLd,
  keywords,
  openGraph,
  description,
  twitter,
} from "@/lib/seo_metadata";
import Footer from "@/components/Footer";
import VercelAnalytics from "@/components/cookie-consent/VercelAnalytics";
import { IBM_Plex_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f207a8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://m4tt3o.dev"),
  title: {
    default: "Matteo Bosshard | Fullstack Software & Application Developer",
    template: "%s | Matteo Bosshard",
  },
  description: description,
  keywords: keywords,
  authors: [{ name: "Matteo Bosshard", url: "https://m4tt3o.dev" }],
  creator: "Matteo Bosshard",
  publisher: "Matteo Bosshard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: openGraph,
  twitter: twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable} antialiased hyphens-auto break-words`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
