"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function VercelAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (saved) {
      try {
        const consent = JSON.parse(saved);
        if (consent.analytics) {
          setAllowed(true);
        }
      } catch (e) {
        // Fallback for old format
        if (saved === "all") {
          setAllowed(true);
        }
      }
    }

    // Listen for storage changes in the same window
    const handleStorageChange = () => {
      const updated = localStorage.getItem("cookie-consent");
      if (updated) {
        try {
          const consent = JSON.parse(updated);
          setAllowed(!!consent.analytics);
        } catch (e) {
          setAllowed(updated === "all");
        }
      }
    };

    window.addEventListener("cookie-consent-updated", handleStorageChange);
    return () =>
      window.removeEventListener("cookie-consent-updated", handleStorageChange);
  }, []);

  if (!allowed) return null;

  return <Analytics />;
}
