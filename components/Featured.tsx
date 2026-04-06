import { getAllProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const FEATURED_SLUGS = ["wordle-bot", "ts-client-portfolio", "auto-ocr"];

export default async function Featured() {
  const allProjects = await getAllProjects();

  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug),
  ).filter(Boolean);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="featured-projects-section">
      <h1>Featured Projects</h1>
      <div className="projects-grid">
        {featuredProjects.map((project) => {
          if (!project) return null;

          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || "Unknown"}
              link={project.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
