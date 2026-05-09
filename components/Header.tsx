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
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b-2 border-primary py-4 px-[4vw] transition-all duration-300 ease-out-expo">
        <div className="max-w-container-max mx-auto w-full grid grid-cols-3 md:flex md:justify-between items-center">
          {/* Mobile: Hamburger (Left) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary p-2 -ml-2 active:scale-90 transition-transform duration-150 ease-out-quart"
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
              className="font-headline text-[clamp(1.25rem,4vw,1.75rem)] font-bold text-primary tracking-tighter hover:scale-105 active:scale-95 transition-all duration-200 ease-out-expo whitespace-nowrap"
            >
              M4TT3O.DEV
            </Link>
          </div>

          {/* Desktop: Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-gap-md grow justify-center px-gap-md">
            <Link
              href="/#work"
              className="px-4 py-1 rounded-pill border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-quart"
            >
              Work
            </Link>
            <Link
              href="/projects"
              className="px-4 py-1 rounded-pill border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-quart"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-1 rounded-pill border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-quart"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-pill border-2 border-outline-variant text-label-mono text-text-secondary hover:border-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-quart"
            >
              GitHub
            </Link>
          </nav>

          {/* CTA (Right) */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary text-black px-5 py-2 md:px-8 md:py-2.5 rounded-pill font-mono text-[11px] md:text-sm uppercase font-bold active:scale-[0.97] transition-all duration-200 ease-out-expo hover:brightness-110 whitespace-nowrap shadow-[0_0_20px_rgba(255,176,202,0.2)]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl transition-all duration-500 ease-out-expo md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-[4vw]">
          <div className="flex justify-between items-center py-4 border-b-2 border-primary mb-12">
            <button
              onClick={closeMenu}
              className="text-primary p-2 -ml-2 active:scale-90 transition-all duration-150"
            >
              <X size={32} />
            </button>
            <span className="font-headline text-headline-h2 font-bold text-primary tracking-tighter">
              MENU
            </span>
            <div className="w-10" /> {/* Spacer */}
          </div>

          <nav className="flex flex-col gap-8 items-center justify-center grow">
            <Link
              href="/#work"
              onClick={closeMenu}
              className="text-4xl font-headline font-bold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Work
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="text-4xl font-headline font-bold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-4xl font-headline font-bold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/HardBoss07"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-4xl font-headline font-bold text-text-primary hover:text-primary active:scale-95 transition-all duration-200 ease-out-expo uppercase"
            >
              GitHub
            </Link>
          </nav>

          <div className="py-12 border-t-2 border-outline-variant flex justify-center">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-primary text-black px-12 py-4 rounded-pill font-mono text-2xl uppercase font-bold active:scale-[0.97] transition-all duration-200 ease-out-expo hover:brightness-110 shadow-[0_0_30px_rgba(255,71,155,0.3)]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
