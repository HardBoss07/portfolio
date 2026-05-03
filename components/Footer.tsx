"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FooterState } from "@/types/components/Footer";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<FooterState["currentYear"]>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {currentYear} - Matteo Bosshard <br />
        All Rights Reserved.
      </p>
      <div className={styles.linksContainer}>
        <Link href="/legal" className={styles.legalLink}>
          Legal Notice & Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
