interface ProjectCardProps {
    title: string;
    description: string;
    lang: string | string[];
    link: string;
}

export default function ProjectCard({title, description, lang, link}: ProjectCardProps) {
    return (
        <div className="project-card">
            <a href={link}>
                <div className="project-card-header">
                    <h2>{title}</h2>
                    <h3 className="text-sm text-right mt-[2px]">
                        {Array.isArray(lang) ? "Languages" : "Language"}: {Array.isArray(lang) ? lang.join(", ") : lang}
                    </h3>
                </div>
                <p>{description}</p>
            </a>
        </div>
    );
}
