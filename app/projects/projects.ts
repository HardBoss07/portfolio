interface ProjectCardProps {
    title: string;
    description: string;
    lang: string | string[];
    link: string;
}

export const personalProjects: ProjectCardProps[] = [
    {
        title: "Snake",
        description: "This is a small project, where I remade the iconic game Snake completely in Rust using a minimal GUI library.",
        lang: "Rust",
        link: "rust-snake"
    },
    {
        title: "1D & 2D Barcodes",
        description: "In this project I created a simple 1D and 2D barcode generator and reader. I made it as a web app using the NextJS framework.",
        lang: "TypeScript",
        link: "ts-barcode"
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
    },
    {
        title: "Valentine's Card",
        description: "This project shows a simple digital Valentine's Day card. I created this project in order to practice my CSS skills, especially CSS animations.",
        lang: ["CSS", "HTML", "JavaScript"],
        link: "css-valentines-card"
    },
    {
        title: "Calculator",
        description: "This is a semi-advanced calculator written in Java and CSS for styling using the JavaFX GUI library.",
        lang: ["Java", "CSS"],
        link: "java-calculator",
    }
];

export const bbwProjects: ProjectCardProps[] = [
    {
        title: "Jokemon",
        description: "In this project I created a 2D console based game with Java. The game is inspired by Pokémon but it's really limited regarding gameplay.",
        lang: "Java",
        link: "java-jokemon"
    },
    {
        title: "Hamster Simulator",
        description: "I had to do this project during the practical classes. With project schedules (Projektablaufplan) and structure charts (Struktogramm) i learned the fundamental structure of a programm.",
        lang: ["Projektablaufplan", "Struktogramm"],
        link: "hamster-simulator"
    }
];