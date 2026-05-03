import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./LiveDemoButton.module.css";
import { LiveDemoButtonProps } from "@/types/components/LiveDemoButton";

export default function LiveDemoButton({ link }: LiveDemoButtonProps) {
  const final: string = `https://${link}.m4tt3o.dev`;

  return (
    <Link
      href={final}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <span>Live Demo</span>
      <ExternalLink />
    </Link>
  );
}
