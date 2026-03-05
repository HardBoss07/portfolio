import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function TsBarcode() {
  const project = projectsData["ts-barcode"];
  return <ProjectTemplate project={project} />;
}
