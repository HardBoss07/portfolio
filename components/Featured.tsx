import { getAllProjects } from "@/lib/projects";
import ProjectCard from "./project/ProjectCard";

const FEATURED_SLUGS = ["serverless-runner", "wordle-bot", "ts-client-portfolio", "auto-ocr"];

export default async function Featured() {
  const allProjects = await getAllProjects();

  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug),
  ).filter(Boolean);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding" id="work">
      <h2 className="border-l-4 border-primary pl-4 uppercase mb-gap-md">
        Selected Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-md">
        {featuredProjects.map((project, index) => {
          if (!project) return null;

          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || "Unknown"}
              link={project.slug}
              index={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
}
