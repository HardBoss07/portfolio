import ProjectCard from '@/components/project/ProjectCard';
import { getAllProjects } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Software Development Portfolio',
  description:
    'Explore a diverse collection of software projects by Matteo Bosshard, featuring high-performance applications in Rust, Java Spring Boot, and modern web frameworks.',
  alternates: {
    canonical: 'https://m4tt3o.dev/projects',
  },
  openGraph: {
    title: 'Projects | Matteo Bosshard Portfolio',
    description:
      'Technical projects showcasing expertise in Fullstack development, Rust, and Java.',
    url: 'https://m4tt3o.dev/projects',
    type: 'website',
  },
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <main>
      <section className="section-padding">
        <div className="border-primary mb-8 flex flex-col justify-between gap-4 border-b-2 pb-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="font-headline m-0 text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold text-white uppercase">
              PROJECTS
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || 'Unknown'}
              link={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
