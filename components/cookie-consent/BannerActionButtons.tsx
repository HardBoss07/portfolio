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
        className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg transition-colors hover:bg-[#F207A8]/10"
      >
        {labels.settings}
      </button>
      <button
        onClick={onRejectAll}
        className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-lg transition-colors hover:bg-[#F207A8]/10"
      >
        {labels.reject}
      </button>
      <button
        onClick={onAcceptAll}
        className="border-2 border-[#F207A8] px-6 py-2 rounded-full bg-[#F207A8] text-black text-lg font-bold transition-colors hover:bg-black hover:text-[#F207A8]"
      >
        {labels.accept}
      </button>
    </div>
  );
}
