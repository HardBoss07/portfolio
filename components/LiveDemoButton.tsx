import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface LiveDemoButtonProps {
  link: string;
}

export default function LiveDemoButton({ link }: LiveDemoButtonProps) {
  const final: string = `https://${link}.m4tt3o.dev`;

  return (
    <Link
      href={final}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-auto flex items-center justify-center gap-2 rounded-full border-2 border-current bg-[#F207A8] px-6 py-0 text-2xl text-left text-black transition-colors hover:bg-black hover:text-[#F207A8] w-[13rem]"
    >
      <span>Live Demo</span>
      <ExternalLink />
    </Link>
  );
}
