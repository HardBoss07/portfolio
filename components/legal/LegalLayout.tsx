import React from "react";
import styles from "@/styles/LegalLayout.module.css";
import { LegalLayoutProps } from "@/types/components/LegalLayout";

export function LegalLayout({ children, tabs }: LegalLayoutProps) {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        {tabs}
        <div className={styles.contentBody}>{children}</div>
      </div>
    </main>
  );
}
