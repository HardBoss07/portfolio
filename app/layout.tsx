import type { Metadata, Viewport } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
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
  description:
    "Matteo Bosshard is a Swiss-based Fullstack Software Developer specializing in Java Spring Boot, Rust, and React. Discover his portfolio of high-performance applications and enterprise solutions.",
  keywords: [
    "Matteo Bosshard",
    "Software Developer Switzerland",
    "Applikationsentwickler Zürich",
    "Fullstack Developer",
    "Rust",
    "Java Spring Boot",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Matteo Bosshard", url: "https://m4tt3o.dev" }],
  creator: "Matteo Bosshard",
  publisher: "Matteo Bosshard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: "en_CH",
    url: "https://m4tt3o.dev",
    siteName: "Matteo Bosshard Portfolio",
    title: "Matteo Bosshard | Fullstack Software & Application Developer",
    description:
      "Digital portfolio of Matteo Bosshard, showcasing expertise in Java, Rust, and modern web technologies.",
    images: [
      {
        url: "/favicon.ico", // Using favicon as requested since no headshot is available
        width: 32,
        height: 32,
        alt: "Matteo Bosshard",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Matteo Bosshard | Fullstack Software & Application Developer",
    description:
      "Swiss-based Fullstack Software Developer specializing in Java Spring Boot, Rust, and React.",
    images: ["/favicon.ico"],
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matteo Bosshard",
    url: "https://m4tt3o.dev",
    image: "https://m4tt3o.dev/favicon.ico",
    sameAs: [
      "https://github.com/HardBoss07",
      "https://instagram.com/matteoluca07",
      "https://www.linkedin.com/in/matteo-bosshard-5aa027253/",
      "https://steamcommunity.com/id/m4tt3o_woof/",
    ],
    jobTitle: "Fullstack Software & Application Developer",
    worksFor: {
      "@type": "Organization",
      name: "WISS Schule Zürich",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
    description:
      "Matteo Bosshard is a Fullstack Software Developer based in Switzerland, specializing in Rust, Java Spring Boot, and React. He is currently an apprentice at WISS Schule Zürich.",
  };

  return (
    <html lang="de-CH">
      <body className={`${robotoSlab.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
