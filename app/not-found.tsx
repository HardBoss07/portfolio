import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Matteo Bosshard',
  description: 'The requested page or project route could not be found.',
};

export default function NotFound() {
  return (
    <main className="py-12 md:py-16">
      <section className="border-outline-variant grid grid-cols-1 items-center gap-8 border-b-2 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
        <div className="animate-entry flex flex-col items-start justify-center gap-6 lg:col-span-8">
          <div className="bg-surface-container border-outline text-label-mono text-primary inline-flex items-center gap-2 border px-3 py-1 text-xs font-bold tracking-wider uppercase">
            <span className="bg-primary inline-block h-2 w-2 animate-pulse" />
            ERROR 404
          </div>

          <h1 className="font-headline text-[clamp(3.2rem,8.5vw,6rem)] leading-[0.9] font-extrabold tracking-tighter text-white uppercase">
            ROUTE <br />
            <span className="text-primary">NOT FOUND</span>
          </h1>

          <div className="border-primary max-w-2xl space-y-3 border-l-2 py-1 pl-4">
            <p className="text-body-lg font-medium text-white">
              The requested path or resource does not exist.
            </p>
            <p className="text-text-secondary leading-relaxed">
              It may have been renamed, moved, or deleted. Check the URL or navigate back to the
              main routes below.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/"
              className="bg-primary border-primary flex items-center justify-center gap-2 border-2 px-6 py-3 font-mono text-xs font-bold text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
            >
              <Home size={16} />
              RETURN HOME
            </Link>
            <Link
              href="/projects"
              className="bg-surface-bright border-outline hover:border-primary hover:text-primary flex items-center justify-center gap-2 border-2 px-6 py-3 font-mono text-xs font-bold text-white uppercase transition-all duration-200 active:scale-[0.98]"
            >
              VIEW ALL PROJECTS
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
