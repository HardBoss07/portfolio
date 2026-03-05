import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function CssValentinesCard() {
  const project = projectsData["css-valentines-card"];
  return <ProjectTemplate project={project} />;
}
