import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  lang: string | string[];
  link: string;
}

export default function ProjectCard({ title, description, lang, link }: ProjectCardProps) {
  const absoluteLink = link.startsWith('/') ? link : `/${link}`;
  const techStack = Array.isArray(lang) ? lang : [lang];

  return (
    <Link
      href={absoluteLink}
      className="group card-brutalist ease-out-expo flex h-full flex-col justify-between p-6 transition-all duration-200"
    >
      <div>
        <h3 className="font-headline text-text-primary group-hover:text-primary mb-3 text-xl font-extrabold tracking-tight uppercase transition-colors duration-200 md:text-2xl">
          {title}
        </h3>
        <p className="text-body-md text-text-secondary border-outline-variant mb-6 line-clamp-3 border-l-2 pl-4">
          {description}
        </p>
      </div>
      <div className="border-outline-variant/60 flex flex-wrap gap-2 border-t pt-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="border-outline text-text-secondary text-label-mono bg-surface-container-high group-hover:border-primary group-hover:text-primary border px-2 py-0.5 text-[0.75rem] tracking-wider uppercase transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
