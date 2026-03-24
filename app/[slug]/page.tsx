import ProjectTemplate from "@/components/ProjectTemplate";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "@/components/Code";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const mdxComponents = {
  code: Code,
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectTemplate metadata={project.metadata}>
      <MDXRemote source={project.content} components={mdxComponents} />
    </ProjectTemplate>
  );
}
