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
  const url = `https://m4tt3o.dev/${slug}`;

  return {
    title: `${title} | Project by Matteo Bosshard`,
    description: `${description} - A technical project by Matteo Bosshard exploring ${project.metadata.techStack}.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Matteo Bosshard`,
      description,
      url,
      type: "article",
      images: [
        {
          url: project.metadata.hasImage
            ? `https://m4tt3o.dev/assets/images/${slug}.png`
            : "https://m4tt3o.dev/favicon.ico",
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
      images: [
        project.metadata.hasImage
          ? `https://m4tt3o.dev/assets/images/${slug}.png`
          : "https://m4tt3o.dev/favicon.ico",
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.metadata.title,
    description: project.metadata.description,
    author: {
      "@type": "Person",
      name: "Matteo Bosshard",
    },
    url: `https://m4tt3o.dev/${slug}`,
    keywords: Array.isArray(project.metadata.techStack)
      ? project.metadata.techStack.join(", ")
      : project.metadata.techStack,
    inLanguage: ["de-CH", "en-CH"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectTemplate metadata={project.metadata}>
        <MDXRemote source={project.content} components={mdxComponents} />
      </ProjectTemplate>
    </>
  );
}
