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

  return (
    <div className="project-card">
      <Link href={absoluteLink}>
        <div className="project-card-header">
          <h2>{title}</h2>
          <h3>
            {Array.isArray(lang) ? "Languages" : "Language"}:{" "}
            {Array.isArray(lang) ? lang.join(", ") : lang}
          </h3>
        </div>
        <p>{description}</p>
      </Link>
    </div>
  );
}
