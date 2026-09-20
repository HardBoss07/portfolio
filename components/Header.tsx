'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-background/90 border-primary ease-out-expo fixed top-0 left-0 z-50 w-full border-b-2 px-[4vw] py-4 backdrop-blur-md transition-all duration-300">
        <div className="max-w-container-max mx-auto grid w-full grid-cols-3 items-center md:flex md:justify-between">
          {/* Mobile: Hamburger (Left) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-primary ease-out-quart -ml-2 p-2 transition-transform duration-150 active:scale-95"
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Logo (Center on mobile, Left on desktop) */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-headline text-primary text-[clamp(1.25rem,4vw,1.75rem)] font-extrabold tracking-tighter whitespace-nowrap transition-colors duration-200 hover:text-white"
            >
              M4TT3O.DEV
            </Link>
          </div>

          {/* Desktop: Navigation (Center) */}
          <nav className="px-gap-md hidden grow items-center justify-center gap-4 md:flex">
            <Link
              href="/#work"
              className="border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant ease-out-quart border-2 px-4 py-1.5 transition-all duration-200"
            >
              WORK
            </Link>
            <Link
              href="/projects"
              className="border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant ease-out-quart border-2 px-4 py-1.5 transition-all duration-200"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant ease-out-quart border-2 px-4 py-1.5 transition-all duration-200"
            >
              CONTACT
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              className="border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant ease-out-quart border-2 px-4 py-1.5 transition-all duration-200"
            >
              GITHUB
            </Link>
          </nav>

          {/* CTA (Right) */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary border-primary ease-out-expo border-2 px-5 py-2 font-mono text-[11px] font-bold whitespace-nowrap text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98] md:px-6 md:py-2 md:text-xs"
            >
              HIRE ME
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-background/98 ease-out-expo fixed inset-0 z-[100] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none -translate-x-full opacity-0'
        }`}
      >
        <div className="flex h-full flex-col p-[4vw]">
          <div className="border-primary mb-12 flex items-center justify-between border-b-2 py-4">
            <button
              type="button"
              onClick={closeMenu}
              className="text-primary -ml-2 p-2 transition-all duration-150 active:scale-95"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <span className="font-headline text-headline-h2 text-primary font-extrabold tracking-tighter">
              MENU
            </span>
            <div className="w-10" /> {/* Spacer */}
          </div>

          <nav className="flex grow flex-col items-start justify-center gap-6 pl-4">
            <Link
              href="/#work"
              onClick={closeMenu}
              className="font-headline text-text-primary hover:text-primary ease-out-expo text-4xl font-extrabold uppercase transition-all duration-200 active:scale-95"
            >
              Work
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="font-headline text-text-primary hover:text-primary ease-out-expo text-4xl font-extrabold uppercase transition-all duration-200 active:scale-95"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="font-headline text-text-primary hover:text-primary ease-out-expo text-4xl font-extrabold uppercase transition-all duration-200 active:scale-95"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="font-headline text-text-primary hover:text-primary ease-out-expo text-4xl font-extrabold uppercase transition-all duration-200 active:scale-95"
            >
              GitHub
            </Link>
          </nav>

          <div className="border-outline-variant flex justify-center border-t-2 py-8">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary border-primary ease-out-expo w-full border-2 px-10 py-4 text-center font-mono text-xl font-bold text-black uppercase transition-all duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
