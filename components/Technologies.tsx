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
  AmazonwebservicesOriginalWordmark,
  AstroOriginal,
  AxiosPlain,
  BashOriginal,
  COriginal,
  CloudflareOriginal,
  DotnetcoreOriginal,
  EslintOriginal,
  FigmaOriginal,
  FlutterOriginal,
  GithubOriginal,
  GithubactionsOriginal,
  GitlabOriginal,
  InkscapeOriginal,
  IntellijOriginal,
  MongodbOriginal,
  NetlifyOriginal,
  PhpOriginal,
  PostcssOriginal,
  PostgresqlOriginal,
  PostmanOriginal,
  PowershellPlain,
  SqliteOriginal,
  VercelOriginal,
  VisualstudioOriginal,
  VscodeOriginal,
  WebpackOriginal,
  YamlOriginal,
  SurrealdbOriginal,
  DartOriginal,
} from "devicons-react";

interface Technology {
  label: string;
  icon: FunctionComponent;
}

const NUM_ROWS = 5;

export default function Technologies() {
  const technologies: Technology[] = [
    // --- Languages & Runtimes ---
    { label: "Rust", icon: RustOriginal },
    { label: "Java", icon: JavaOriginal },
    { label: "TypeScript", icon: TypescriptOriginal },
    { label: "JavaScript", icon: JavascriptOriginal },
    { label: "Python", icon: PythonOriginal },
    { label: "C++", icon: CplusplusOriginal },
    { label: "C#", icon: CsharpOriginal },
    { label: "C", icon: COriginal },
    { label: "PHP", icon: PhpOriginal },
    { label: "Dart", icon: DartOriginal },
    { label: "Node.js", icon: NodejsOriginalWordmark },
    { label: "WASM", icon: WasmOriginal },

    // --- Frameworks & Libraries ---
    { label: "React", icon: ReactOriginal },
    { label: "Next.js", icon: NextjsOriginal },
    { label: "Spring", icon: SpringOriginal },
    { label: "Tailwind", icon: TailwindcssOriginal },
    { label: "Vite", icon: VitejsOriginal },
    { label: "Tauri", icon: TauriOriginal },
    { label: "Astro", icon: AstroOriginal },
    { label: "Flutter", icon: FlutterOriginal },
    { label: ".NET Core", icon: DotnetcoreOriginal },
    { label: "p5.js", icon: P5jsOriginal },
    { label: "Axios", icon: AxiosPlain },

    // --- Databases & Backend ---
    { label: "MySQL", icon: MysqlOriginalWordmark },
    { label: "PostgreSQL", icon: PostgresqlOriginal },
    { label: "MongoDB", icon: MongodbOriginal },
    { label: "SQLite", icon: SqliteOriginal },
    { label: "Firebase", icon: FirebaseOriginal },
    { label: "SurrealDB", icon: SurrealdbOriginal },
    { label: "DBeaver", icon: DbeaverOriginal },

    // --- Infrastructure & DevOps ---
    { label: "Docker", icon: DockerPlain },
    { label: "NGINX", icon: NginxOriginal },
    { label: "Apache", icon: ApacheOriginal },
    { label: "AWS", icon: AmazonwebservicesOriginalWordmark },
    { label: "Vercel", icon: VercelOriginal },
    { label: "Netlify", icon: NetlifyOriginal },
    { label: "Cloudflare", icon: CloudflareOriginal },
    { label: "GitHub Actions", icon: GithubactionsOriginal },

    // --- Tools & Workflow ---
    { label: "Git", icon: GitOriginal },
    { label: "GitHub", icon: GithubOriginal },
    { label: "GitLab", icon: GitlabOriginal },
    { label: "NPM", icon: NpmOriginalWordmark },
    { label: "Postman", icon: PostmanOriginal },
    { label: "Webpack", icon: WebpackOriginal },
    { label: "PostCSS", icon: PostcssOriginal },
    { label: "ESLint", icon: EslintOriginal },
    { label: "Bash", icon: BashOriginal },
    { label: "PowerShell", icon: PowershellPlain },
    { label: "YAML", icon: YamlOriginal },
    { label: "Markdown", icon: MarkdownOriginal },

    // --- Creative & IDEs ---
    { label: "Figma", icon: FigmaOriginal },
    { label: "Blender", icon: BlenderOriginal },
    { label: "Unity", icon: UnityOriginal },
    { label: "Inkscape", icon: InkscapeOriginal },
    { label: "VS Code", icon: VscodeOriginal },
    { label: "Visual Studio", icon: VisualstudioOriginal },
    { label: "IntelliJ", icon: IntellijOriginal },
    { label: "Arduino", icon: ArduinoOriginalWordmark },
    { label: "HTML5", icon: Html5Original },
    { label: "CSS3", icon: Css3Original },
  ];

  // Programmatically split technologies into NUM_ROWS sub-arrays
  const rows = Array.from({ length: NUM_ROWS }, (_, i) =>
    technologies.filter((_, idx) => idx % NUM_ROWS === i),
  );

  const BASE_DURATION_PER_ITEM = 5; // Seconds per item
  const modifiers = [1, 1.3, 1.15]; // Speed multipliers for each row

  return (
    <div className="relative w-full overflow-hidden py-[1rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-col gap-y-[0.75rem]">
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
                className={`flex shrink-0 items-center gap-x-[1.5rem] px-[0.75rem] ${animationClass}`}
              >
                {row.concat(row).map(({ label, icon: Icon }, idx) => (
                  <div
                    key={`${label}-${idx}`}
                    className="flex flex-row items-center gap-[0.6rem] pl-[0.75rem] pr-[1.25rem] py-[0.15rem] bg-neutral-950 border-2 border-[#F207A8] rounded-full transition-all hover:scale-105"
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
