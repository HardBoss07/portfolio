import { Metadata } from "next";
import ContactItem from "@/components/contact/ContactItem";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Matteo Bosshard Portfolio",
  description:
    "Contact Matteo Bosshard for software development projects and collaborations.",
  alternates: {
    canonical: "https://m4tt3o.dev/contact",
  },
  openGraph: {
    title: "Contact | Matteo Bosshard Portfolio",
    description:
      "Contact Matteo Bosshard for software development projects and collaborations.",
    url: "https://m4tt3o.dev/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main>
      <h1>Contact me</h1>
      <p>
        If you're interested, shoot me a message with your inquiry on one of the
        chosen methods below. I will try to respond as quickly as possible.
      </p>
      <h2>Social Media</h2>
      <div className={styles.contactList}>
        <ContactItem
          url="https://github.com/HardBoss07"
          label="@HardBoss07"
          icon="github"
        />
        <ContactItem
          url="https://linkedin.com/in/m4tt3o"
          label="@m4tt3o"
          icon="linkedin"
        />
        <ContactItem
          url="https://instagram.com/matteoluca07"
          label="@matteoluca07"
          icon="instagram"
        />

        <ContactItem
          url="https://discord.com"
          label="@m4tt3o"
          icon="discord"
        />
        <ContactItem
          url="https://steamcommunity.com/id/m4tt3o_woof/"
          label="@m4tt3o_woof"
          icon="steam"
        />
      </div>
      <h2>Personal Email</h2>
      <div className={styles.contactList}>
        <ContactItem
          url="mailto:matteobosshard@gmail.com"
          label="matteobosshard@gmail.com"
          icon="mail"
        />
        <ContactItem
          url="mailto:matteo@bosshard.net"
          label="matteo@bosshard.net"
          icon="mail"
        />
      </div>
      <h2>School Email</h2>
      <div className={styles.contactList}>
        <ContactItem
          url="mailto:matteo.bosshard@wiss-edu.ch"
          label="matteo.bosshard@wiss-edu.ch"
          icon="mail"
        />
      </div>
    </main>
  );
}

