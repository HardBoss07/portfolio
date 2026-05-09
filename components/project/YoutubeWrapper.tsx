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
    <div className="video-wrapper flex flex-col items-center justify-center bg-surface-dim border-2 border-primary text-center p-8">
      <p className="text-body-lg font-bold uppercase mb-6 text-text-primary">
        External Media Required
      </p>
      <p className="text-body-md mb-8 text-text-secondary max-w-md">
        This video requires third-party cookies from YouTube to be displayed.
        Accepting will enable all external media across the site.
      </p>

      <button
        className="bg-primary text-on-primary px-8 py-3 rounded-pill text-label-mono uppercase font-bold transition-all hover:brightness-110 active:scale-95"
        onClick={() => updateConsent({ externalMedia: true })}
      >
        Load Video & Accept
      </button>
    </div>
  );
}
