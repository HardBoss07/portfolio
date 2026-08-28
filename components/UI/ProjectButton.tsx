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

  const isAbsoluteOrRelative = link.startsWith("http") || link.startsWith("/");

  let href = link;

  if (!isAbsoluteOrRelative) {
    if (type === "liveDemo") {
      href = `https://${link}.m4tt3o.dev`;
    } else {
      href = `https://github.com/HardBoss07/${link}`;
    }
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-primary text-black border-2 border-primary px-6 py-2.5 text-label-mono text-xs uppercase font-bold transition-all hover:bg-white hover:border-white active:scale-95"
    >
      <span>{label}</span>
      <ExternalLink size={16} />
    </Link>
  );
}
