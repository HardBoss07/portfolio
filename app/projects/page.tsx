import ProjectCard from "@/components/project/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Software Development Portfolio",
  description:
    "Explore a diverse collection of software projects by Matteo Bosshard, featuring high-performance applications in Rust, Java Spring Boot, and modern web frameworks.",
  alternates: {
    canonical: "https://m4tt3o.dev/projects",
  },
  openGraph: {
    title: "Projects | Matteo Bosshard Portfolio",
    description:
      "Technical projects showcasing expertise in Fullstack development, Rust, and Java.",
    url: "https://m4tt3o.dev/projects",
    type: "website",
  },
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <main>
      <section className="section-padding">
        <div className="inline-block border-b-4 border-primary pb-2 mb-gap-md">
          <h1 className="uppercase">MY PROJECTS</h1>
        </div>
        <p className="text-body-lg max-w-2xl mb-gap-lg">
          A comprehensive collection of my technical explorations, academic
          assignments, and personal tools. Each project represents a milestone
          in my journey as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-md">
          {projects.map((project, index: number) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || "Unknown"}
              link={project.slug}
              index={index + 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
