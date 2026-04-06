// "use cache";
// import { cacheLife } from "next/cache";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectMetadata, ProjectData } from "@/types/project";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content/projects");

const PROJECT_ORDER = [
  "wordle-bot",
  "ts-client-portfolio",
  "cord-path",
  "tauri-resource-monitor",
  "auto-ocr",
  "rust-snake",
  "java-to-do-list",
  "asm-tic-tac-toe",
  "project-structure",
  "java-calculator",
  "ts-barcode",
  "java-jokemon",
  "css-valentines-card",
];

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectData | null> {
  // cacheLife("stale-while-revalidate");
  try {
    const filePath = path.join(PROJECTS_DIRECTORY, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      metadata: {
        slug,
        ...(data as Omit<ProjectMetadata, "slug">),
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  // cacheLife("stale-while-revalidate");
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(PROJECTS_DIRECTORY, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug,
        ...(data as Omit<ProjectMetadata, "slug">),
      };
    })
    .sort((a, b) => {
      const indexA = PROJECT_ORDER.indexOf(a.slug);
      const indexB = PROJECT_ORDER.indexOf(b.slug);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      return a.title.localeCompare(b.title);
    });

  return projects;
}
