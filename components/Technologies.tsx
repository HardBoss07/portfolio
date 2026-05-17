"use client";

import { technologies } from "@/lib/technologies";

export default function Technologies() {
    return (
        <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden bg-surface-bright py-4 border-y-2 border-outline-variant my-gap-lg animate-entry stagger-3">
            <div className="flex w-max">
                <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
                    {technologies.map(({ label }, index) => (
                        <span
                            key={`${label}-${index}-1`}
                            className={`font-headline text-[clamp(2rem,6vw,3.5rem)] font-semibold px-12 uppercase shrink-0 ${
                                index % 2 === 0 ? "text-primary" : "text-text-primary"
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
                            className={`font-headline text-[clamp(2rem,6vw,3.5rem)] font-semibold px-12 uppercase shrink-0 ${
                                index % 2 === 0 ? "text-primary" : "text-text-primary"
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
