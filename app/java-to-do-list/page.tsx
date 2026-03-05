import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function JavaToDoList() {
  const project = projectsData["java-to-do-list"];
  return <ProjectTemplate project={project} />;
}
