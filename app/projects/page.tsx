import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

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
