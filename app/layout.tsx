import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {
  jsonLd,
  keywords,
  openGraph,
  description,
  twitter,
} from "@/lib/seo_metadata";
import Footer from "@/components/Footer";
import ClientConsentWrapper from "@/components/cookie-consent/ClientConsentWrapper";
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
        className={`${roboto.variable} ${robotoMono.variable} antialiased hyphens-auto break-words`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <ClientConsentWrapper />
      </body>
    </html>
  );
}
