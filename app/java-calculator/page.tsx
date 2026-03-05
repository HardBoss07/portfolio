import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function JavaCalculator() {
  const project = projectsData["java-calculator"];
  return <ProjectTemplate project={project} />;
}
