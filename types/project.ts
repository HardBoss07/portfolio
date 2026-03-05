export interface ProjectSection {
  title: string;
  description: string;
  code?: string;
  language?: string;
  filePath?: string; // For snippets fetched from public/
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  repoLink: string;
  downloadLink?: string;
  downloadText?: string;
  liveDemoLink?: string;
  liveDemoText?: string;
  videoYoutubeId?: string;
  sections: ProjectSection[];
  techStack: string | string[];
  hasImage?: boolean;
}
