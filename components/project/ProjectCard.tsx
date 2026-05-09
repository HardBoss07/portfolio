import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  lang: string | string[];
  link: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  lang,
  link,
  index,
}: ProjectCardProps) {
  const absoluteLink = link.startsWith("/") ? link : `/${link}`;
  const techStack = Array.isArray(lang) ? lang : [lang];
  const formattedIndex = index.toString().padStart(2, "0");

  return (
    <Link
      href={absoluteLink}
      className="group card-brutalist flex flex-col h-full active:scale-[0.98] transition-all duration-300 ease-out-expo"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-label-mono text-primary font-bold tracking-wider">
          {formattedIndex} // PROJECT
        </span>
        <span className="icon-align">
          <ArrowUpRight className="text-primary group-hover:rotate-45 transition-transform duration-300 ease-out-expo" />
        </span>
      </div>
      <h3 className="font-headline text-headline-h2 mb-4 group-hover:text-primary transition-colors duration-300 ease-out-expo uppercase">
        {title}
      </h3>
      <p className="text-body-md text-text-secondary mb-8 border-l-2 border-outline-variant pl-4 flex-grow text-wrap-balance">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap mt-auto">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 border border-primary text-primary text-label-mono text-[0.7rem] uppercase tracking-widest bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
