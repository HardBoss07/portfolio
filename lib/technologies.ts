interface Technology {
  label: string;
}

export const technologies: Technology[] = [
  // --- Languages & Runtimes ---
  { label: "Node.js" },
  { label: "WASM" },
  { label: "Java" },
  { label: "TypeScript" },
  { label: "Rust" },

  // --- Frameworks & Libraries ---
  { label: "Next.js" },
  { label: "Spring" },
  { label: "Tailwind" },
  { label: "Tauri" },
  { label: "Astro" },

  // --- Databases & Backend ---
  { label: "MySQL" },
  { label: "PostgreSQL" },

  // --- Infrastructure & DevOps ---
  { label: "Docker" },
  { label: "Vercel" },
  { label: "Cloudflare" },
  { label: "GitHub Actions" },

  // --- Tools & Workflow ---
  { label: "GitHub" },

  // --- Creative & IDEs ---
  { label: "Blender" },
  { label: "VS Code" },
  { label: "IntelliJ" },
];
