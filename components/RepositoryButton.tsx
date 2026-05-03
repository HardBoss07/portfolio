import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./RepositoryButton.module.css";
import { RepositoryButtonProps } from "@/types/components/RepositoryButton";

export default function RepositoryButton({ link }: RepositoryButtonProps) {
  return (
    <Link
      href={`https://github.com/HardBoss07/${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <span>Repository</span>
      <ExternalLink />
    </Link>
  );
}
