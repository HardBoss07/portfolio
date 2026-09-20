import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/project/ProjectCard';

const FEATURED_SLUGS = [
  'serverless-runner',
  'shape-recognizer',
  'wordle-bot',
  'ts-client-portfolio',
];

export default async function Featured() {
  const allProjects = await getAllProjects();

  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug),
  ).filter(Boolean);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="section-padding" id="work">
      <div className="border-outline-variant mb-8 flex flex-col justify-between gap-4 border-b-2 pb-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-headline-h2 m-0 font-extrabold uppercase">Selected Works</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          if (!project) return null;

          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              lang={project.techStack || 'Unknown'}
              link={project.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
