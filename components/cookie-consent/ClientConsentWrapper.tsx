"use client";

import dynamic from "next/dynamic";

const CookieConsent = dynamic(
  () => import("@/components/cookie-consent/CookieConsent"),
  { ssr: false }
);

const VercelAnalytics = dynamic(
  () => import("@/components/cookie-consent/VercelAnalytics"),
  { ssr: false }
);

export default function ClientConsentWrapper() {
  return (
    <>
      <CookieConsent />
      <VercelAnalytics />
    </>
  );
}
