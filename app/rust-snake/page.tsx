import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function RustSnake() {
  const project = projectsData["rust-snake"];
  return <ProjectTemplate project={project} />;
}
