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
    <div className="border-outline-variant mt-6 flex flex-col justify-end gap-3 border-t pt-4 sm:flex-row">
      <button
        type="button"
        onClick={onShowSettings}
        className="border-outline-variant text-label-mono hover:border-primary hover:text-primary hover:bg-surface-bright text-text-secondary border-2 px-5 py-2.5 text-xs font-bold uppercase transition-all active:scale-95"
      >
        {labels.settings}
      </button>
      <button
        type="button"
        onClick={onRejectAll}
        className="border-outline-variant text-label-mono hover:border-primary hover:text-primary hover:bg-surface-bright text-text-secondary border-2 px-5 py-2.5 text-xs font-bold uppercase transition-all active:scale-95"
      >
        {labels.reject}
      </button>
      <button
        type="button"
        onClick={onAcceptAll}
        className="bg-primary border-primary text-label-mono border-2 px-7 py-2.5 text-xs font-bold text-black uppercase transition-all hover:border-white hover:bg-white active:scale-95"
      >
        {labels.accept}
      </button>
    </div>
  );
}
