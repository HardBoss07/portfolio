import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/ProjectCard";

interface ProjectCardProps {
    title: string;
    description: string;
    lang: string | string[];
    link: string;
}

export default function Projects() {
    const personalProjects: ProjectCardProps[] = [
        {
            title: "Snake",
            description: "This is a small project, where I remade the iconic game Snake completely in Rust using a minimal GUI library.",
            lang: "Rust",
            link: "rust-snake"
        },
        {
            title: "Tic Tac Toe",
            description: "In this project, I played around a little with Assembly. My goal was to make the fairly simple game Tic Tac Toe completely written in Assembly.",
            lang: "Assembly",
            link: "asm-tic-tac-toe"
        },
        {
            title: "To Do List",
            description: "This project is a simple To Do List application written in Java for Desktop. It includes the whole life cycle of an application.",
            lang: ["Java", "CSS"],
            link: "java-to-do-list"
        }
    ]

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
