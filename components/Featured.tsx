import { getAllProjects } from "@/lib/projects";
import ProjectCard from "./project/ProjectCard";

const FEATURED_SLUGS = [
  "serverless-runner",
  "wordle-bot",
  "ts-client-portfolio",
  "auto-ocr",
];

export default async function Featured() {
  const allProjects = await getAllProjects();

  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug),
  ).filter(Boolean);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding" id="work">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-outline-variant pb-6 gap-4">
        <div>
          <h2 className="uppercase text-headline-h2 font-extrabold m-0">
            Selected Works
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => {
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
