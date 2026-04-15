import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface RepositoryButtonProps {
  link: string;
}

export default function RepositoryButton({ link }: RepositoryButtonProps) {
  return (
    <Link
      href={`https://github.com/HardBoss07/${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-auto flex items-center justify-center gap-2 rounded-full border-2 border-current bg-[#F207A8] px-6 py-0 text-2xl text-left text-black transition-colors hover:bg-black hover:text-[#F207A8] w-[13rem]"
    >
      <span>Repository</span>
      <ExternalLink />
    </Link>
  );
}
