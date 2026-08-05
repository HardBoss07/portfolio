import Technologies from "@/components/Technologies";
import Featured from "@/components/Featured";
import Experience from "@/components/Experience";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";

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
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 py-gap-lg overflow-hidden">
        <div className="flex-[1.2] flex flex-col justify-center items-start gap-gap-md animate-entry">
          <div className="inline-block border-b-4 border-primary pb-2 stagger-1">
            <h1 className="uppercase">Hello, World!</h1>
          </div>
          <div className="space-y-4 max-w-2xl stagger-2">
            <p className="text-body-lg text-wrap-balance">
              I am Matteo Bosshard, an aspiring application developer currently
              attending the WISS Schule in Zürich for my apprenticeship as a
              Application developer. This website serves as a digital portfolio
              to showcase and document my growth, passion, and skills within the
              field of software development.
            </p>
            <p className="text-body-lg text-wrap-balance">
              Here, you&apos;ll find a collection of my personal projects,
              things I&apos;ve built out of curiosity or to solve real problems,
              as well as work I&apos;ve completed as part of my practical
              lessons at school.
            </p>
          </div>
          <div className="flex gap-4 stagger-3">
            <span className="flex items-center gap-2 text-label-mono text-primary font-bold">
              <span className="icon-align">
                <Terminal size={18} className="animate-pulse" />
              </span>
              AVAILABLE FOR PROJECTS
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="w-64 h-80 md:w-[350px] md:h-[450px] border-4 border-primary rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,176,202,0.2)] bg-surface-dim">
            <Image
              src="/assets/images/headshot.jpeg"
              alt="Matteo Headshot"
              width={450}
              height={550}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out-expo"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <Technologies />

      {/* About Section */}
      <section
        className="py-gap-lg space-y-gap-md animate-entry stagger-3"
        id="about"
      >
        <h2 className="border-l-4 border-primary pl-4 uppercase">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-md items-start">
          <div className="space-y-4">
            <p className="text-wrap-balance">
              I am a self-taught software developer based out of Switzerland
              (Zürich / Winterthur) with <Experience startYear={2020} /> years
              of experience. I started learning how to program in the game
              development sector using C# with the Unity game engine.
            </p>
            <p className="text-wrap-balance">
              Now I focus more on full-stack development, using React frameworks
              for frontend development. For the backend, I use enterprise
              technologies such as Java and Spring Boot, as well as
              performance-oriented technologies like Rust.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-wrap-balance">
              I also work with MySQL on an enterprise level for managing
              relational databases. This includes designing efficient schemas,
              writing optimized queries, and ensuring data integrity in
              high-demand applications.
            </p>
            <p className="text-wrap-balance">
              My goal is to continuously improve as a developer, and this space
              reflects that ongoing journey. Whether you&apos;re a fellow coder,
              a potential collaborator, an employer or just curious, feel free
              to explore and see what I&apos;ve been working on!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="py-gap-lg animate-entry stagger-3">
        <Featured />
      </section>

      {/* Call to Action */}
      <section className="py-gap-lg border-t-2 border-outline-variant flex flex-col md:flex-row gap-gap-lg items-center animate-entry stagger-3">
        <div className="flex-1">
          <h1 className="leading-tight uppercase">
            READY TO <br />
            <span className="text-primary">BUILD?</span>
          </h1>
          <p className="text-body-lg mt-4 text-wrap-balance">
            Pushing the boundaries of the open web one pixel at a time.
          </p>
        </div>
        <div className="flex-1 w-full space-y-4">
          <Link
            href="/contact"
            className="flex justify-between items-center p-6 bg-surface-variant/10 border-2 border-outline-variant hover:border-primary transition-all duration-300 ease-out-expo group active:scale-[0.98]"
          >
            <span className="text-label-mono font-bold uppercase">
              START PROJECT
            </span>
            <span className="icon-align">
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300 ease-out-expo" />
            </span>
          </Link>
          <Link
            href="https://linkedin.com/in/matteo-bosshard"
            className="flex justify-between items-center p-6 bg-surface-variant/10 border-2 border-outline-variant hover:border-primary transition-all duration-300 ease-out-expo group active:scale-[0.98]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-label-mono font-bold uppercase">
              LINKEDIN CONNECT
            </span>
            <span className="icon-align">
              <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out-expo" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
