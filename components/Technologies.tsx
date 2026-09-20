'use client';

import { technologies } from '@/lib/technologies';

export default function Technologies() {
  return (
    <div className="bg-surface-container border-outline-variant animate-entry relative right-[50%] left-[50%] my-8 -mr-[50vw] -ml-[50vw] w-screen overflow-hidden border-y-2 py-3 md:my-12">
      <div className="flex w-max">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {technologies.map(({ label }, index) => (
            <span
              key={`${label}-${index}-1`}
              className={`font-headline shrink-0 px-8 text-[clamp(1.75rem,5vw,3rem)] font-extrabold tracking-tight uppercase ${
                index % 2 === 0 ? 'text-primary' : 'text-white'
              }`}
            >
              {label.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {technologies.map(({ label }, index) => (
            <span
              key={`${label}-${index}-2`}
              className={`font-headline shrink-0 px-8 text-[clamp(1.75rem,5vw,3rem)] font-extrabold tracking-tight uppercase ${
                index % 2 === 0 ? 'text-primary' : 'text-white'
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
