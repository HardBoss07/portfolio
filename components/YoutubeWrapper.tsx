"use client";
import { useEffect, useState } from "react";

export default function YouTubeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const saved = localStorage.getItem("cookie-consent");
      if (saved) {
        try {
          const consent = JSON.parse(saved);
          if (consent.externalMedia) {
            setAllowed(true);
            return;
          }
        } catch (e) {
          if (saved === "all") {
            setAllowed(true);
            return;
          }
        }
      }
      setAllowed(false);
    };

    checkConsent();
    window.addEventListener("cookie-consent-updated", checkConsent);
    return () =>
      window.removeEventListener("cookie-consent-updated", checkConsent);
  }, []);

  const acceptExternalMedia = () => {
    const saved = localStorage.getItem("cookie-consent");
    let consent = { necessary: true, analytics: false, externalMedia: true };
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        consent = { ...parsed, externalMedia: true };
      } catch (e) {
        if (saved === "all") {
          consent = { necessary: true, analytics: true, externalMedia: true };
        }
      }
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setAllowed(true);
  };

  if (allowed) return <>{children}</>;

  return (
    <div className="video-wrapper flex flex-col items-center justify-center bg-black border-2 border-t-0 text-center p-6 min-h-[300px]">
      <p className="text-xl mb-4">
        Dieses Video erfordert Cookies von Drittanbietern (YouTube).
      </p>

      <button
        className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-xl transition-colors hover:bg-[#F207A8] hover:text-black"
        onClick={acceptExternalMedia}
      >
        Video laden & Cookies akzeptieren
      </button>
    </div>
  );
}
