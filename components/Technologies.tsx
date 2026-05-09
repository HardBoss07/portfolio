"use client";

import { technologies } from "@/lib/technologies";

export default function Technologies() {
  const allTech = [...technologies, ...technologies, ...technologies];

  return (
    <div className="animate-marquee whitespace-nowrap flex items-center">
      {allTech.map(({ label }, idx) => (
        <span
          key={`${label}-${idx}`}
          className={`font-headline text-[clamp(2rem,6vw,3.5rem)] font-semibold px-12 uppercase ${
            idx % 2 === 0 ? "text-primary" : "text-text-primary"
          }`}
        >
          {label.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
