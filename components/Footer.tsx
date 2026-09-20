'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Copyright } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-gap-md gap-gap-sm bg-surface-dim border-primary mt-gap-lg flex w-full flex-col items-center justify-between border-t-2 px-[4vw] md:flex-row">
      <div className="text-text-primary text-label-mono font-bold">M4TT3O.DEV</div>
      <div className="text-label-mono text-text-secondary flex items-center gap-2 text-center">
        <Copyright size={14} className="inline-block" />
        <span>{currentYear} ALL RIGHTS RESERVED.</span>
      </div>
      <div className="gap-gap-md flex">
        <Link
          href="/legal"
          className="text-label-mono text-text-secondary hover:text-primary transition-colors"
        >
          Legal
        </Link>
        <Link
          href="https://github.com/HardBoss07"
          className="text-label-mono text-text-secondary hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/m4tt3o/"
          className="text-label-mono text-text-secondary hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
