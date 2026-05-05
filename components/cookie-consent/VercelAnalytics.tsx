"use client";
import { useConsent } from "@/hooks/useConsent";
import { Analytics } from "@vercel/analytics/next";

export default function VercelAnalytics() {
  const { consent } = useConsent();

  if (!consent.analytics) return null;

  return <Analytics />;
}
