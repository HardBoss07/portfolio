type BannerActionButtonsProps = {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onShowSettings: () => void;
  labels: {
    accept: string;
    reject: string;
    settings: string;
  };
};

export function BannerActionButtons({
  onAcceptAll,
  onRejectAll,
  onShowSettings,
  labels,
}: BannerActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6 pt-4 border-t border-outline-variant">
      <button
        onClick={onShowSettings}
        className="border-2 border-outline-variant px-5 py-2.5 text-label-mono text-xs uppercase font-bold transition-all hover:border-primary hover:text-primary hover:bg-surface-bright active:scale-95 text-text-secondary"
      >
        {labels.settings}
      </button>
      <button
        onClick={onRejectAll}
        className="border-2 border-outline-variant px-5 py-2.5 text-label-mono text-xs uppercase font-bold transition-all hover:border-primary hover:text-primary hover:bg-surface-bright active:scale-95 text-text-secondary"
      >
        {labels.reject}
      </button>
      <button
        onClick={onAcceptAll}
        className="bg-primary text-black border-2 border-primary px-7 py-2.5 text-label-mono text-xs uppercase font-bold active:scale-95 transition-all hover:bg-white hover:border-white"
      >
        {labels.accept}
      </button>
    </div>
  );
}
