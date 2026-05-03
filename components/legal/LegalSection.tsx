import React from "react";
import styles from "@/styles/LegalSection.module.css";
import { LegalSectionProps } from "@/types/components/LegalSection";

export function LegalSection({ title, children, isNotice }: LegalSectionProps) {
  return (
    <div className={`${styles.section} ${isNotice ? styles.notice : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
