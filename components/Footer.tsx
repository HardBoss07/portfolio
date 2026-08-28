"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-gap-md px-[4vw] flex flex-col md:flex-row justify-between items-center gap-gap-sm bg-surface-dim border-t-2 border-primary mt-gap-lg">
      <div className="text-text-primary font-bold text-label-mono">
        M4TT3O.DEV
      </div>
      <div className="text-label-mono text-text-secondary flex items-center gap-2 text-center">
        <Copyright size={14} className="inline-block" />
        <span>{currentYear} ALL RIGHTS RESERVED.</span>
      </div>
      <div className="flex gap-gap-md">
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
