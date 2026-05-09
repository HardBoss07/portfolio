import {
  TypescriptOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  NodejsOriginalWordmark,
  SpringOriginal,
  DockerPlain,
  MysqlOriginalWordmark,
  JavaOriginal,
  RustOriginal,
  TauriOriginal,
  WasmOriginal,
  BlenderOriginal,
  AstroOriginal,
  CloudflareOriginal,
  GithubOriginal,
  GithubactionsOriginal,
  IntellijOriginal,
  PostgresqlOriginal,
  VercelOriginal,
  VscodeOriginal,
} from "devicons-react";
import { FunctionComponent } from "react";

interface Technology {
  label: string;
  icon: FunctionComponent;
}

export const technologies: Technology[] = [
  // --- Languages & Runtimes ---
  { label: "Node.js", icon: NodejsOriginalWordmark },
  { label: "WASM", icon: WasmOriginal },
  { label: "Java", icon: JavaOriginal },
  { label: "TypeScript", icon: TypescriptOriginal },
  { label: "Rust", icon: RustOriginal },

  // --- Frameworks & Libraries ---
  { label: "Next.js", icon: NextjsOriginal },
  { label: "Spring", icon: SpringOriginal },
  { label: "Tailwind", icon: TailwindcssOriginal },
  { label: "Tauri", icon: TauriOriginal },
  { label: "Astro", icon: AstroOriginal },

  // --- Databases & Backend ---
  { label: "MySQL", icon: MysqlOriginalWordmark },
  { label: "PostgreSQL", icon: PostgresqlOriginal },

  // --- Infrastructure & DevOps ---
  { label: "Docker", icon: DockerPlain },
  { label: "Vercel", icon: VercelOriginal },
  { label: "Cloudflare", icon: CloudflareOriginal },
  { label: "GitHub Actions", icon: GithubactionsOriginal },

  // --- Tools & Workflow ---
  { label: "GitHub", icon: GithubOriginal },

  // --- Creative & IDEs ---
  { label: "Blender", icon: BlenderOriginal },
  { label: "VS Code", icon: VscodeOriginal },
  { label: "IntelliJ", icon: IntellijOriginal },
];
