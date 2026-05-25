import { ExternalLink } from "lucide-react";
import Link from "next/link";

export type ButtonType = "repository" | "download" | "liveDemo";

export interface ButtonProps {
  link?: string;
  type: ButtonType;
}

export default function ProjectButton({ link, type }: ButtonProps) {
  const label =
    type === "repository"
      ? "Repository"
      : type === "download"
        ? "Download"
        : "Live Demo";

  if (!link) {
    return null;
  }

  const href =
    link.startsWith("http") || link.startsWith("/")
      ? link
      : `https://github.com/HardBoss07/${link}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary-container text-on-primary-container px-6 py-2 text-label-mono uppercase font-bold transition-all hover:brightness-110 active:scale-95"
    >
      <span>{label}</span>
      <ExternalLink size={18} />
    </Link>
  );
}
