"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b-2 border-primary py-4 px-[4vw] transition-all duration-300 ease-out-expo">
        <div className="max-w-container-max mx-auto w-full grid grid-cols-3 md:flex md:justify-between items-center">
          {/* Mobile: Hamburger (Left) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary p-2 -ml-2 active:scale-95 transition-transform duration-150 ease-out-quart"
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
              className="font-headline text-[clamp(1.25rem,4vw,1.75rem)] font-extrabold text-primary tracking-tighter hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              M4TT3O.DEV
            </Link>
          </div>

          {/* Desktop: Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-4 grow justify-center px-gap-md">
            <Link
              href="/#work"
              className="px-4 py-1.5 border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant transition-all duration-200 ease-out-quart"
            >
              WORK
            </Link>
            <Link
              href="/projects"
              className="px-4 py-1.5 border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant transition-all duration-200 ease-out-quart"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="px-4 py-1.5 border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant transition-all duration-200 ease-out-quart"
            >
              CONTACT
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary hover:bg-surface-variant transition-all duration-200 ease-out-quart"
            >
              GITHUB
            </Link>
          </nav>

          {/* CTA (Right) */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary text-black px-5 py-2 md:px-6 md:py-2 border-2 border-primary font-mono text-[11px] md:text-xs uppercase font-bold active:scale-[0.98] transition-all duration-200 ease-out-expo hover:bg-white hover:border-white whitespace-nowrap"
            >
              HIRE ME
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl transition-all duration-300 ease-out-expo md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-[4vw]">
          <div className="flex justify-between items-center py-4 border-b-2 border-primary mb-12">
            <button
              onClick={closeMenu}
              className="text-primary p-2 -ml-2 active:scale-95 transition-all duration-150"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <span className="font-headline text-headline-h2 font-extrabold text-primary tracking-tighter">
              MENU
            </span>
            <div className="w-10" /> {/* Spacer */}
          </div>

          <nav className="flex flex-col gap-6 items-start justify-center grow pl-4">
            <Link
              href="/#work"
              onClick={closeMenu}
              className="text-4xl font-headline font-extrabold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Work
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="text-4xl font-headline font-extrabold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-4xl font-headline font-extrabold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-4xl font-headline font-extrabold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              GitHub
            </Link>
          </nav>

          <div className="py-8 border-t-2 border-outline-variant flex justify-center">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary text-black px-10 py-4 border-2 border-primary font-mono text-xl uppercase font-bold active:scale-[0.98] transition-all duration-200 ease-out-expo hover:bg-white hover:border-white w-full text-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
