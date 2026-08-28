import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  lang: string | string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  lang,
  link,
}: ProjectCardProps) {
  const absoluteLink = link.startsWith("/") ? link : `/${link}`;
  const techStack = Array.isArray(lang) ? lang : [lang];

  return (
    <Link
      href={absoluteLink}
      className="group card-brutalist flex flex-col justify-between h-full p-6 transition-all duration-200 ease-out-expo"
    >
      <div>
        <h3 className="font-headline text-xl md:text-2xl font-extrabold mb-3 text-text-primary group-hover:text-primary transition-colors duration-200 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-body-md text-text-secondary mb-6 pl-4 border-l-2 border-outline-variant line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap pt-3 border-t border-outline-variant/60">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 border border-outline text-text-secondary text-label-mono text-[0.75rem] uppercase tracking-wider bg-surface-container-high group-hover:border-primary group-hover:text-primary transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
