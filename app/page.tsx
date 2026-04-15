import Technologies from "@/components/Technologies";
import Featured from "@/components/Featured";
import Experience from "@/components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Matteo Bosshard Portfolio",
  description:
    "Matteo Bosshard is an aspiring Fullstack Software & Application Developer at WISS Schule Zürich. Expert in Java Spring Boot, Rust, and React, building performance-oriented applications.",
  alternates: {
    canonical: "https://m4tt3o.dev",
    languages: {
      "de-CH": "https://m4tt3o.dev",
      "en-CH": "https://m4tt3o.dev",
    },
  },
  openGraph: {
    title: "Home | Matteo Bosshard Portfolio",
    description:
      "Fullstack Software & Application Developer based in Switzerland. Showcasing projects in Rust, Java, and TypeScript.",
    url: "https://m4tt3o.dev",
    siteName: "Matteo Bosshard Portfolio",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <p>
        I am Matteo Bosshard, an aspiring application developer currently
        attending the WISS Schule in Zürich for my apprenticeship as a
        Application developer. This website serves as a digital portfolio to
        showcase and document my growth, passion, and skills within the field of
        software development.
      </p>
      <p>
        Here, you'll find a collection of my personal projects, things I've
        built out of curiosity or to solve real problems, as well as work I've
        completed as part of my practical lessons at school. My goal is to
        continuously improve as a developer, and this space reflects that
        ongoing journey.
      </p>
      <p>
        Whether you're a fellow coder, a potential collaborator, an employer or
        just curious, feel free to explore and see what I've been working on!
      </p>
      <h2>About Me</h2>
      <p>
        I am a self-taught software developer based out of Switzerland (Zürich /
        Winterthur) with <Experience startYear={2020} /> years of experience. I
        started learning how to program in the game development sector using C#
        with the Unity game engine. Now I focus more on full-stack development,
        using React frameworks for frontend development. For the backend, I use
        enterprise technologies such as Java and Spring Boot, as well as
        performance-oriented technologies like Rust.
      </p>
      <p>
        I also work with MySQL on an enterprise level for managing relational
        databases. This includes designing efficient schemas, writing optimized
        queries, and ensuring data integrity in high-demand applications.
      </p>
      <h1>Technologies I worked with</h1>
      <Technologies />
      <Featured />
    </main>
  );
}
