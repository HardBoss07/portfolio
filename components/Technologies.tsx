"use client";

import { technologies } from "@/lib/technologies";

const NUM_ROWS = 5;

export default function Technologies() {
  // Programmatically split technologies into NUM_ROWS sub-arrays
  const rows = Array.from({ length: NUM_ROWS }, (_, i) =>
    technologies.filter((_, idx) => idx % NUM_ROWS === i),
  );

  const BASE_DURATION_PER_ITEM = 5; // Seconds per item
  const modifiers = [1, 1.3, 1.15]; // Speed multipliers for each row

  return (
    <div className="relative w-full overflow-hidden py-md [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex flex-col gap-y-sm">
        {rows.map((row, rowIndex) => {
          const duration = `${row.length * BASE_DURATION_PER_ITEM * modifiers[rowIndex % modifiers.length]}s`;
          const isReverse = rowIndex % 2 === 0;
          const animationClass = isReverse
            ? "animate-marquee-reverse"
            : "animate-marquee";

          return (
            <div
              key={rowIndex}
              className="flex whitespace-nowrap"
              style={
                {
                  "--duration": duration,
                } as React.CSSProperties
              }
            >
              <div
                className={`flex shrink-0 items-center gap-x-lg px-sm ${animationClass}`}
              >
                {row.concat(row).map(({ label, icon: Icon }, idx) => (
                  <div
                    key={`${label}-${idx}`}
                    className="flex flex-row items-center gap-xs pl-sm pr-md py-xs bg-neutral-900/50 border-2 border-hot-pink rounded-pill transition-all duration-300 ease-out hover:scale-105 hover:bg-neutral-900 active:scale-95"
                  >
                    <div className="w-[1.2rem] h-[1.2rem] md:w-[1.5rem] md:h-[1.5rem] flex items-center justify-center drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]">
                      <Icon />
                    </div>
                    <span className="text-[0.9rem] md:text-[1.1rem] font-bold text-neutral-300 tracking-wider">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
