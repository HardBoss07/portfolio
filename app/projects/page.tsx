import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/ProjectCard";
import {personalProjects} from "@/app/projects/projects";

interface ProjectCardProps {
    title: string;
    description: string;
    lang: string | string[];
    link: string;
}

export default function Projects() {
    return (
        <>
            <Header/>

            <main>
                <h1>My Projects</h1>
                <div className="mt-6">
                    {personalProjects.map((props: ProjectCardProps, index: number) => (
                        <ProjectCard key={index} {...props} />
                    ))}
                </div>
            </main>

            <Footer/>
        </>
    );
}
