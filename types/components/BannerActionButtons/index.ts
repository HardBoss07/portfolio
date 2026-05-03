export interface BannerActionButtonsProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onShowSettings: () => void;
  labels: {
    accept: string;
    reject: string;
    settings: string;
  };
}
