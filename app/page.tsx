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
                    I am Matteo Bosshard, an aspiring application developer currently attending the
                    Informatikmittelschule
                    since August 2024. This website serves as a digital portfolio to showcase and document my growth,
                    passion, and skills within the field of software development.
                </p>
                <p>
                    Here, you’ll find a collection of my personal projects, things I’ve built out of curiosity or to
                    solve real problems, as well as work I’ve completed as part of my practical lessons at school. My
                    goal is to continuously improve as a developer, and this space reflects that ongoing journey.
                </p>
                <p>
                    Whether you're a fellow coder, a potential collaborator, or just curious, feel free to explore and
                    see what I've been working on!
                </p>
                <h1>Technologies I worked with</h1>
                <Technologies/>
            </main>

            <Footer/>
        </>
    );
}
