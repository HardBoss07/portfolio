export type Language = "DE" | "EN";

export interface TranslationLabels {
  accept: string;
  reject: string;
  settings: string;
}

export interface Translation {
  title: string;
  description: string;
  moreInfo: string;
  legalNotice: string;
  btnLabels: TranslationLabels;
  settingsTitle: string;
  catNecessary: string;
  catNecessaryDesc: string;
  catAnalytics: string;
  catAnalyticsDesc: string;
  catMedia: string;
  catMediaDesc: string;
  btnBack: string;
  btnSave: string;
}

export type Translations = Record<Language, Translation>;
