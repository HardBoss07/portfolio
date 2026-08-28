"use client";

import { technologies } from "@/lib/technologies";

export default function Technologies() {
  return (
    <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden bg-surface-container py-3 border-y-2 border-outline-variant my-8 md:my-12 animate-entry">
      <div className="flex w-max">
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          {technologies.map(({ label }, index) => (
            <span
              key={`${label}-${index}-1`}
              className={`font-headline text-[clamp(1.75rem,5vw,3rem)] font-extrabold px-8 uppercase shrink-0 tracking-tight ${
                index % 2 === 0 ? "text-primary" : "text-white"
              }`}
            >
              {label.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          {technologies.map(({ label }, index) => (
            <span
              key={`${label}-${index}-2`}
              className={`font-headline text-[clamp(1.75rem,5vw,3rem)] font-extrabold px-8 uppercase shrink-0 tracking-tight ${
                index % 2 === 0 ? "text-primary" : "text-white"
              }`}
            >
              {label.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
