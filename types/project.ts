export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  intro: string;
  repoLink: string;
  downloadLink?: string;
  downloadText?: string;
  liveDemoLink?: string;
  liveDemoText?: string;
  videoYoutubeId?: string;
  techStack: string | string[];
  hasImage?: boolean;
}

export interface ProjectData {
  metadata: ProjectMetadata;
  content: string;
}
