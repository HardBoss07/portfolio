import ProjectTemplate from "@/components/ProjectTemplate";
import { projectsData } from "@/data/projects";

export default function AsmTicTacToe() {
  const project = projectsData["asm-tic-tac-toe"];
  return <ProjectTemplate project={project} />;
}
