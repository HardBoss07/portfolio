"use client";

import React from "react";
import { useConsent } from "@/hooks/useConsent";
import { Analytics } from "@vercel/analytics/next";
import { VercelAnalyticsProps } from "@/types/components/VercelAnalytics";

export default function VercelAnalytics({}: VercelAnalyticsProps) {
  const { consent } = useConsent();

  if (!consent.analytics) return null;

  return <Analytics />;
}
