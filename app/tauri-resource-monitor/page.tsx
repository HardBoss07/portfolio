import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function TauriResourceMonitor() {
  const project = projectsData["tauri-resource-monitor"];
  return <ProjectTemplate project={project} />;
}
