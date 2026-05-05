"use client";
import { useConsent } from "@/hooks/useConsent";

export default function YouTubeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { consent, updateConsent } = useConsent();

  if (consent.externalMedia) return <>{children}</>;

  return (
    <div className="video-wrapper flex flex-col items-center justify-center bg-black border-2 border-t-0 text-center p-6 min-h-[300px]">
      <p className="text-xl mb-4">
        Dieses Video erfordert Cookies von Drittanbietern (YouTube).
      </p>

      <button
        className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-xl transition-colors hover:bg-[#F207A8] hover:text-black"
        onClick={() => updateConsent({ externalMedia: true })}
      >
        Video laden & Cookies akzeptieren
      </button>
    </div>
  );
}
