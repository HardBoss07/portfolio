import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Technologies from "@/app/components/Technologies";

export default function Home() {
    return (
        <>
            <Header/>

            <main>
                <h1>Hello, World!</h1>
                <p>
                    I am Matteo Bosshard, an aspiring application developer currently attending the WISS Schule in
                    Zürich for my apprenticeship as a Application developer. This website serves as a digital portfolio
                    to showcase and
                    document my growth, passion, and skills within the field of software development.
                </p>
                <p>
                    Here, you’ll find a collection of my personal projects, things I’ve built out of curiosity or to
                    solve real problems, as well as work I’ve completed as part of my practical lessons at school. My
                    goal is to continuously improve as a developer, and this space reflects that ongoing journey.
                </p>
                <p>
                    Whether you're a fellow coder, a potential collaborator, an employer or just curious, feel free to
                    explore and see what I've been working on!
                </p>
                <h2>About Me</h2>
                <p>
                    I am a self-taught software developer based out of Switzerland with 5 years of experience. I started
                    learning how to program
                    in the game development sector using C# with the Unity game engine. Now I focus more on full-stack
                    development, using React frameworks for frontend development. For the backend, I use enterprise
                    technologies such as Java and Spring Boot, as well as performance-oriented technologies like Rust.
                </p>
                <p>
                    I also work with MySQL on an enterprise level for managing relational databases. This includes
                    designing efficient schemas, writing optimized queries, and ensuring data integrity in high-demand
                    applications.
                </p>
                <h1>Technologies I worked with</h1>
                <Technologies/>
            </main>

            <Footer/>
        </>
    );
}
