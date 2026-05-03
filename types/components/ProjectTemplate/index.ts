import { ProjectMetadata } from "@/types/project";
import React from "react";

export interface ProjectTemplateProps {
  metadata: ProjectMetadata;
  children: React.ReactNode;
}
