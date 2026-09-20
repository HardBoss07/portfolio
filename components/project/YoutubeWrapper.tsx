'use client';
import { useConsent } from '@/hooks/useConsent';

export default function YouTubeWrapper({ children }: { children: React.ReactNode }) {
  const { consent, updateConsent } = useConsent();

  if (consent.externalMedia) return <>{children}</>;

  return (
    <div className="video-wrapper bg-surface-dim border-primary flex flex-col items-center justify-center border-2 p-8 text-center">
      <p className="text-body-lg text-text-primary mb-6 font-bold uppercase">
        External Media Required
      </p>
      <p className="text-body-md text-text-secondary mb-8 max-w-md">
        This video requires third-party cookies from YouTube to be displayed. Accepting will enable
        all external media across the site.
      </p>

      <button
        type="button"
        className="bg-primary text-on-primary rounded-pill text-label-mono px-8 py-3 font-bold uppercase transition-all hover:brightness-110 active:scale-95"
        onClick={() => updateConsent({ externalMedia: true })}
      >
        Load Video & Accept
      </button>
    </div>
  );
}
