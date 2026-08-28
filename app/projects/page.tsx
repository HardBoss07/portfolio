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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b-2 border-primary pb-6 mb-8 gap-4">
          <div>
            <h1 className="uppercase font-headline font-extrabold text-[clamp(2.5rem,7vw,4.5rem)] leading-none m-0 text-white">
              PROJECTS
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index: number) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || "Unknown"}
              link={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
