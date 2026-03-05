import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function JavaJokemon() {
  const project = projectsData["java-jokemon"];
  return <ProjectTemplate project={project} />;
}
