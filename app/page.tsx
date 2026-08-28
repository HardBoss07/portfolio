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
      {/* Hero Section - Asymmetrical & Bold */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 border-b-2 border-outline-variant">
        <div className="lg:col-span-8 flex flex-col justify-center items-start gap-6 animate-entry">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline text-label-mono text-xs text-primary font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-primary animate-pulse inline-block" />
            AVAILABLE FOR PROJECTS
          </div>

          <h1 className="uppercase font-headline font-extrabold text-[clamp(3.2rem,8.5vw,6rem)] leading-[0.9] tracking-tighter text-white">
            MATTEO <br />
            <span className="text-primary">BOSSHARD</span>
          </h1>

          <div className="space-y-3 max-w-2xl border-l-2 border-primary pl-4 py-1">
            <p className="text-body-lg text-white font-medium">
              Application & software developer based in Zürich / Winterthur.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Currently attending WISS Schule Zürich. Building
              performance-critical systems and fullstack applications with Rust,
              Java Spring Boot, and TypeScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#work"
              className="bg-primary text-black font-mono text-xs uppercase font-bold px-6 py-3 border-2 border-primary hover:bg-white hover:border-white transition-all duration-200 active:scale-[0.98]"
            >
              EXPLORE WORK
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container text-white font-mono text-xs uppercase font-bold px-6 py-3 border-2 border-outline hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Headshot / Profile block */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <div className="w-full max-w-full lg:max-w-[300px] aspect-[4/5] border-2 border-primary bg-surface-container p-2 relative group">
            <div className="w-full h-full relative overflow-hidden bg-surface-dim">
              <Image
                src="/assets/images/headshot.jpeg"
                alt="Matteo Headshot"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover contrast-125"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <Technologies />

      {/* About Section - Asymmetrical column split */}
      <section
        className="py-12 md:py-16 border-b-2 border-outline-variant animate-entry"
        id="about"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="uppercase text-headline-h2 font-extrabold sticky top-28">
              ABOUT ME
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary text-base leading-relaxed">
            <div className="space-y-4 bg-surface-container p-6 border-2 border-outline-variant">
              <p>
                I am a self-taught software developer based in Switzerland with{" "}
                <Experience startYear={2020} /> years of practical coding
                experience. My journey started in game development engineering
                complex systems in C# with Unity.
              </p>
              <p>
                Today, I focus heavily on full-stack architecture, combining
                robust backend engineering with crisp, high-performance web
                frontends.
              </p>
            </div>

            <div className="space-y-4 bg-surface-container p-6 border-2 border-outline-variant">
              <p>
                In the backend, I leverage enterprise Java (Spring Boot)
                alongside memory-safe, ultra-performant Rust. For databases, I
                specialize in relational schema design and optimization with
                MySQL.
              </p>
              <p>
                Every project is approached with craft, rigorous typing, and
                architectural clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="py-gap-lg animate-entry stagger-3">
        <Featured />
      </section>

      {/* Call to Action - Stark & High Contrast */}
      <section className="py-8 md:py-12 my-12 border-2 border-primary bg-surface-container p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between animate-entry">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight m-0">
            READY TO BUILD?
          </h2>
          <p className="text-text-secondary mt-2 text-base">
            Open for new software engineering challenges, apprenticeships, and
            technical collaborations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-black font-mono text-xs uppercase font-bold border-2 border-primary hover:bg-white hover:border-white transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            START PROJECT
            <ArrowRight size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/m4tt3o/"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-bright text-white font-mono text-xs uppercase font-bold border-2 border-outline hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
