import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { ProjectCardProps } from "@/types/components/ProjectCard";

export default function ProjectCard({
  title,
  description,
  lang,
  link,
}: ProjectCardProps) {
  const absoluteLink = link.startsWith("/") ? link : `/${link}`;

  return (
    <div className={styles.projectCard}>
      <Link href={absoluteLink}>
        <div className={styles.projectCardHeader}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.language}>
            {Array.isArray(lang) ? "Languages" : "Language"}:{" "}
            {Array.isArray(lang) ? lang.join(", ") : lang}
          </h3>
        </div>
        <p className={styles.description}>{description}</p>
      </Link>
    </div>
  );
}
