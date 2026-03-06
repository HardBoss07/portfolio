import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

// Define the type for the dynamic route params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // In Next.js 15+, params is a Promise that must be awaited
  const { slug } = await params;
  
  // Look up the project data using the slug from the URL
  const project = projectsData[slug as keyof typeof projectsData];

  // If the user visits a slug that doesn't exist, show a 404
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}