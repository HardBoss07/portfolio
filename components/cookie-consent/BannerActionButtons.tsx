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
    <div className="flex flex-col sm:flex-row gap-4 justify-end mt-4">
      <button
        onClick={onShowSettings}
        className="border-2 border-outline-variant px-6 py-2 rounded-pill text-label-mono font-bold transition-all hover:border-primary hover:text-primary active:scale-95"
      >
        {labels.settings}
      </button>
      <button
        onClick={onRejectAll}
        className="border-2 border-outline-variant px-6 py-2 rounded-pill text-label-mono font-bold transition-all hover:border-primary hover:text-primary active:scale-95"
      >
        {labels.reject}
      </button>
      <button
        onClick={onAcceptAll}
        className="bg-primary text-on-primary px-8 py-2 rounded-pill text-label-mono uppercase font-bold active:scale-95 transition-transform hover:brightness-110"
      >
        {labels.accept}
      </button>
    </div>
  );
}
