import { Metadata } from "next";
import Link from "next/link";

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
        <Link
          href="https://github.com/HardBoss07"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub - @HardBoss07
        </Link>
        <Link
          href="https://linkedin.com/in/m4tt3o"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn - @m4tt3o
        </Link>
        <Link
          href="https://instagram.com/matteoluca07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram - @matteoluca07
        </Link>
        <Link
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord - @m4tt3o
        </Link>
        <Link
          href="https://steamcommunity.com/id/m4tt3o_woof/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam - @m4tt3o_woof
        </Link>
      </div>
      <h2>Personal Email</h2>
      <div className="contact">
        <Link href="mailto:matteobosshard@gmail.com">
          matteobosshard@gmail.com
        </Link>
        <Link href="mailto:matteo@bosshard.net">matteo@bosshard.net</Link>
      </div>
      <h2>School Email</h2>
      <div className="contact">
        <Link href="mailto:matteo.bosshard@wiss-edu.ch">
          matteo.bosshard@wiss-edu.ch
        </Link>
      </div>
    </main>
  );
}
