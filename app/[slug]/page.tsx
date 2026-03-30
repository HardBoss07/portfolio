import ProjectTemplate from "@/components/ProjectTemplate";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "@/components/Code";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const mdxComponents = {
  code: Code,
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Matteo Bosshard",
    };
  }

  const { title, description } = project.metadata;
  const url = `https://m4tt3o.dev/projects/${slug}`;

  return {
    title: `${title} | Matteo Bosshard Portfolio`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `https://m4tt3o.dev/assets/images/${slug}.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://m4tt3o.dev/assets/images/${slug}.png`],
    },
  };
}

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
