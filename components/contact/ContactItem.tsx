import React from "react";
import Link from "next/link";
import { ContactIcon } from "./ContactIcon";
import styles from "@/styles/ContactItem.module.css";
import { ContactItemProps } from "@/types/components/ContactItem";

export default function ContactItem({ url, label, icon }: ContactItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactLink}
    >
      <ContactIcon name={icon} size={20} strokeWidth={2} />
      <span className={styles.label}>{label}</span>
    </Link>
  );
}