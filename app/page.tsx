import Technologies from '@/components/Technologies';
import Featured from '@/components/Featured';
import Experience from '@/components/Experience';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home | Matteo Bosshard Portfolio',
  description:
    'Matteo Bosshard is an aspiring Fullstack Software & Application Developer at WISS Schule Zürich. Expert in Java Spring Boot, Rust, and React, building performance-oriented applications.',
  alternates: {
    canonical: 'https://m4tt3o.dev',
    languages: {
      'de-CH': 'https://m4tt3o.dev',
      'en-CH': 'https://m4tt3o.dev',
    },
  },
  openGraph: {
    title: 'Home | Matteo Bosshard Portfolio',
    description:
      'Fullstack Software & Application Developer based in Switzerland. Showcasing projects in Rust, Java, and TypeScript.',
    url: 'https://m4tt3o.dev',
    siteName: 'Matteo Bosshard Portfolio',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section - Asymmetrical & Bold */}
      <section className="border-outline-variant grid grid-cols-1 items-center gap-8 border-b-2 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
        <div className="animate-entry flex flex-col items-start justify-center gap-6 lg:col-span-8">
          <div className="bg-surface-container border-outline text-label-mono text-primary inline-flex items-center gap-2 border px-3 py-1 text-xs font-bold tracking-wider uppercase">
            <span className="bg-primary inline-block h-2 w-2 animate-pulse" />
            AVAILABLE FOR PROJECTS
          </div>

          <h1 className="font-headline text-[clamp(3.2rem,8.5vw,6rem)] leading-[0.9] font-extrabold tracking-tighter text-white uppercase">
            MATTEO <br />
            <span className="text-primary">BOSSHARD</span>
          </h1>

          <div className="border-primary max-w-2xl space-y-3 border-l-2 py-1 pl-4">
            <p className="text-body-lg font-medium text-white">
              Application & software developer based in Zürich / Winterthur.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Currently attending WISS Schule Zürich. Building performance-critical systems and
              fullstack applications with Rust, Java Spring Boot, and TypeScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#work"
              className="bg-primary border-primary border-2 px-6 py-3 font-mono text-xs font-bold text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
            >
              EXPLORE WORK
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container border-outline hover:border-primary hover:text-primary border-2 px-6 py-3 font-mono text-xs font-bold text-white uppercase transition-all duration-200 active:scale-[0.98]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Headshot / Profile block */}
        <div className="flex justify-start lg:col-span-4 lg:justify-end">
          <div className="border-primary bg-surface-container group relative aspect-[4/5] w-full max-w-full border-2 p-2 lg:max-w-[300px]">
            <div className="bg-surface-dim relative h-full w-full overflow-hidden">
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
        className="border-outline-variant animate-entry border-b-2 py-12 md:py-16"
        id="about"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-headline-h2 sticky top-28 font-extrabold uppercase">ABOUT ME</h2>
          </div>

          <div className="text-text-secondary grid grid-cols-1 gap-6 text-base leading-relaxed md:grid-cols-2 lg:col-span-8">
            <div className="bg-surface-container border-outline-variant space-y-4 border-2 p-6">
              <p>
                I am a self-taught software developer based in Switzerland with{' '}
                <Experience startYear={2020} /> years of practical coding experience. My journey
                started in game development engineering complex systems in C# with Unity.
              </p>
              <p>
                Today, I focus heavily on full-stack architecture, combining robust backend
                engineering with crisp, high-performance web frontends.
              </p>
            </div>

            <div className="bg-surface-container border-outline-variant space-y-4 border-2 p-6">
              <p>
                In the backend, I leverage enterprise Java (Spring Boot) alongside memory-safe,
                ultra-performant Rust. For databases, I specialize in relational schema design and
                optimization with MySQL.
              </p>
              <p>
                Every project is approached with craft, rigorous typing, and architectural clarity.
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
      <section className="border-primary bg-surface-container animate-entry my-12 flex flex-col items-start justify-between gap-6 border-2 p-6 py-8 md:flex-row md:items-center md:gap-8 md:p-10 md:py-12">
        <div className="max-w-xl">
          <h2 className="m-0 text-3xl font-extrabold tracking-tight text-white uppercase md:text-5xl">
            READY TO BUILD?
          </h2>
          <p className="text-text-secondary mt-2 text-base">
            Open for new software engineering challenges, apprenticeships, and technical
            collaborations.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
          <Link
            href="/contact"
            className="bg-primary border-primary flex items-center justify-center gap-2 border-2 px-6 py-3.5 font-mono text-xs font-bold whitespace-nowrap text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
          >
            START PROJECT
            <ArrowRight size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/m4tt3o/"
            className="bg-surface-bright border-outline hover:border-primary hover:text-primary flex items-center justify-center gap-2 border-2 px-6 py-3.5 font-mono text-xs font-bold whitespace-nowrap text-white uppercase transition-all duration-200 active:scale-[0.98]"
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
