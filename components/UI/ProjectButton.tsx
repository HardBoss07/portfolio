import { ExternalLink } from "lucide-react";
import Link from "next/link";

export type ButtonType = "repository" | "download" | "liveDemo";

export interface ButtonProps {
  link: string;
  type: ButtonType;
}

export default function ProjectButton({ link, type }: ButtonProps) {
  const label =
    type === "repository"
      ? "Repository"
      : type === "download"
        ? "Download"
        : "Live Demo";
  return (
    <Link
      href={`https://github.com/HardBoss07/${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-auto flex items-center justify-center gap-sm rounded-pill border-2 border-hot-pink bg-hot-pink px-lg py-1 text-xl text-left text-black transition-all duration-300 ease-out hover:bg-black hover:text-hot-pink w-[13rem] hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="font-bold">{label}</span>
      <ExternalLink size={20} />
    </Link>
  );
}
