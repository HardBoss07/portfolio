import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Matteo Bosshard Portfolio",
  description:
    "A showcase of my projects including Java, Rust, and TypeScript applications.",
  alternates: {
    canonical: "https://m4tt3o.dev/projects",
  },
  openGraph: {
    title: "Projects | Matteo Bosshard Portfolio",
    description: "Explore the various projects built by Matteo Bosshard.",
    url: "https://m4tt3o.dev/projects",
    type: "website",
  },
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <main>
      <h1>My Projects</h1>
      <div className="mt-6">
        {projects.map((project, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            lang={project.techStack}
            link={project.slug}
          />
        ))}
      </div>
    </main>
  );
}
