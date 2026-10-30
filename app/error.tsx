'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main className="py-12 md:py-16">
      <section className="border-outline-variant grid grid-cols-1 items-center gap-8 border-b-2 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
        <div className="animate-entry flex flex-col items-start justify-center gap-6 lg:col-span-8">
          <div className="bg-surface-container border-outline text-label-mono text-primary inline-flex items-center gap-2 border px-3 py-1 text-xs font-bold tracking-wider uppercase">
            <span className="bg-primary inline-block h-2 w-2 animate-pulse" />
            ERROR 500
          </div>

          <h1 className="font-headline text-[clamp(3.2rem,8.5vw,6rem)] leading-[0.9] font-extrabold tracking-tighter text-white uppercase">
            RUNTIME <br />
            <span className="text-primary">EXCEPTION</span>
          </h1>

          <div className="border-primary max-w-2xl space-y-3 border-l-2 py-1 pl-4">
            <p className="text-body-lg font-medium text-white">
              An unexpected error occurred during execution.
            </p>
            <p className="text-text-secondary leading-relaxed">
              {error.message ||
                'Something went wrong while attempting to load this component or route. You can retry the operation or return to the main route.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="bg-primary border-primary flex items-center justify-center gap-2 border-2 px-6 py-3 font-mono text-xs font-bold text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
            >
              <RefreshCw size={16} />
              RETRY EXECUTION
            </button>
            <Link
              href="/"
              className="bg-surface-bright border-outline hover:border-primary hover:text-primary flex items-center justify-center gap-2 border-2 px-6 py-3 font-mono text-xs font-bold text-white uppercase transition-all duration-200 active:scale-[0.98]"
            >
              <Home size={16} />
              RETURN HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
