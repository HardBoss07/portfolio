import { Metadata } from "next";
import Link from "next/link";
import ContactItem from "@/components/contact/ContactItem";

export const metadata: Metadata = {
  title: "Contact | Matteo Bosshard",
  description:
    "Get in touch with Matteo Bosshard, a Swiss-based Fullstack Developer, for collaborations or inquiries regarding software development projects.",
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
      <div className="contact">
        <ContactItem
          url="https://github.com/HardBoss07"
          label="GitHub - @HardBoss07"
        />
        <ContactItem
          url="https://linkedin.com/in/m4tt3o"
          label="LinkedIn - @m4tt3o"
        />
        <ContactItem
          url="https://instagram.com/matteoluca07"
          label="Instagram - @matteoluca07"
        />

        <ContactItem
          url="https://discord.com"
          label="Discord - @m4tt3o"
        />
        <ContactItem
          url="https://steamcommunity.com/id/m4tt3o_woof/"
          label="Steam - @m4tt3o_woof"
        />
      </div>
      <h2>Personal Email</h2>
      <div className="contact">
        <ContactItem
          url="mailto:matteobosshard@gmail.com"
          label="matteobosshard@gmail.com"
        />
        <ContactItem
          url="mailto:matteo@bosshard.net"
          label="matteo@bosshard.net"
        />
      </div>
      <h2>School Email</h2>
      <div className="contact">
        <ContactItem
          url="mailto:matteo.bosshard@wiss-edu.ch"
          label="matteo.bosshard@wiss-edu.ch"
        />
      </div>
    </main>
  );
}
