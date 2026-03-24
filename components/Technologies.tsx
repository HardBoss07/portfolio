"use client";

import { FunctionComponent } from "react";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  VitejsOriginal,
  NodejsOriginalWordmark,
  SpringOriginal,
  NpmOriginalWordmark,
  GitOriginal,
  DockerPlain,
  FirebaseOriginal,
  NginxOriginal,
  MysqlOriginalWordmark,
  DbeaverOriginal,
  JavaOriginal,
  CsharpOriginal,
  PythonOriginal,
  RustOriginal,
  CplusplusOriginal,
  TauriOriginal,
  WasmOriginal,
  BlenderOriginal,
  UnityOriginal,
  P5jsOriginal,
  ArduinoOriginalWordmark,
  MarkdownOriginal,
  ApacheOriginal,
} from "devicons-react";

interface Technology {
  label: string;
  icon: FunctionComponent;
}

const NUM_ROWS = 3;

export default function Technologies() {
  const technologies: Technology[] = [
    { label: "Rust", icon: RustOriginal },
    { label: "Java", icon: JavaOriginal },
    { label: "Spring", icon: SpringOriginal },
    { label: "TypeScript", icon: TypescriptOriginal },
    { label: "MySQL", icon: MysqlOriginalWordmark },
    { label: "Git", icon: GitOriginal },
    { label: "Docker", icon: DockerPlain },
    { label: "React", icon: ReactOriginal },
    { label: "Next.js", icon: NextjsOriginal },
    { label: "Tauri", icon: TauriOriginal },
    { label: "Node.js", icon: NodejsOriginalWordmark },
    { label: "HTML5", icon: Html5Original },
    { label: "CSS3", icon: Css3Original },
    { label: "JavaScript", icon: JavascriptOriginal },
    { label: "Tailwind", icon: TailwindcssOriginal },
    { label: "Python", icon: PythonOriginal },
    { label: "NGINX", icon: NginxOriginal },
    { label: "Firebase", icon: FirebaseOriginal },
    { label: "NPM", icon: NpmOriginalWordmark },
    { label: "WASM", icon: WasmOriginal },
    { label: "C++", icon: CplusplusOriginal },
    { label: "Vite", icon: VitejsOriginal },
    { label: "DBeaver", icon: DbeaverOriginal },
    { label: "Arduino", icon: ArduinoOriginalWordmark },
    { label: "Markdown", icon: MarkdownOriginal },
    { label: "Apache", icon: ApacheOriginal },
    { label: "Unity", icon: UnityOriginal },
    { label: "Blender", icon: BlenderOriginal },
    { label: "p5.js", icon: P5jsOriginal },
    { label: "C#", icon: CsharpOriginal },
  ];

  // Programmatically split technologies into NUM_ROWS sub-arrays
  const rows = Array.from({ length: NUM_ROWS }, (_, i) =>
    technologies.filter((_, idx) => idx % NUM_ROWS === i)
  );

  const BASE_DURATION_PER_ITEM = 5; // Seconds per item
  const modifiers = [1, 1.3, 1.15]; // Speed multipliers for each row

  return (
    <div className="relative w-full overflow-hidden py-[2rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-col gap-y-[1.5rem]">
        {rows.map((row, rowIndex) => {
          const duration = `${row.length * BASE_DURATION_PER_ITEM * modifiers[rowIndex % modifiers.length]}s`;
          const isReverse = rowIndex % 2 !== 0; // Row 1/3 move RTL, Row 2 moves LTR
          const animationClass = isReverse ? "animate-marquee-reverse" : "animate-marquee";

          return (
            <div
              key={rowIndex}
              className="flex whitespace-nowrap"
              style={{
                "--duration": duration,
              } as React.CSSProperties}
            >
              <div className={`flex shrink-0 items-center gap-x-[2rem] px-[1rem] ${animationClass}`}>
                {row.concat(row).map(({ label, icon: Icon }, idx) => (
                  <div
                    key={`${label}-${idx}`}
                    className="flex flex-row items-center gap-[0.75rem] pl-[0.75rem] pr-[1.25rem] py-[0.25rem] bg-neutral-950 border-2 border-hot-pink rounded-full transition-all hover:scale-105"
                  >
                    <div className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] flex items-center justify-center drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]">
                      <Icon />
                    </div>
                    <span className="text-[1rem] md:text-[1.25rem] font-bold text-neutral-300 uppercase tracking-wider">
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
