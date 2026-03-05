import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function CordPath() {
  const project = projectsData["cord-path"];
  return <ProjectTemplate project={project} />;
}
