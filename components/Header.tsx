import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { HeaderProps } from "@/types/components/Header";

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/projects" className={styles.navLink}>
          Projects
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
        <Link
          href="https://github.com/HardBoss07"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.navLink} ${styles.navLinkLast}`}
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}
