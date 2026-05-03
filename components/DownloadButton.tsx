import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { DownloadButtonProps } from "@/types/components/DownloadButton";

export default function DownloadButton({ link }: DownloadButtonProps) {
  return (
    <Link
      href={`https://github.com/HardBoss07/${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="DownloadButton_button"
    >
      <span>Download</span>
      <ExternalLink />
    </Link>
  );
}
