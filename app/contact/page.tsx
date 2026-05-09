import { Metadata } from "next";
import Link from "next/link";
import ContactItem from "@/components/contact/ContactItem";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
      <section className="section-padding">
        <section className="flex flex-col lg:flex-row gap-gap-lg animate-entry">
          <div className="flex-1 lg:sticky lg:top-48 h-fit stagger-1">
            <div className="inline-block border-b-4 border-primary pb-2 mb-gap-md">
              <h1 className="uppercase text-[clamp(2.5rem,8vw,4.5rem)] leading-tight">
                READY TO <br />
                <span className="text-primary">BUILD?</span>
              </h1>
            </div>
            <p className="text-body-lg max-w-lg text-text-secondary text-wrap-balance">
              Pushing the boundaries of the open web one pixel at a time. If
              you&apos;re interested, shoot me a message with your inquiry on
              one of the chosen methods. I will try to respond as quickly as
              possible.
            </p>
          </div>

          <div className="flex-[1.5] space-y-gap-lg stagger-2">
            <section className="space-y-gap-md">
              <h2 className="border-l-4 border-primary pl-4 uppercase text-headline-h2">
                Social Media
              </h2>
              <div className="grid grid-cols-1 gap-4">
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
              </div>
            </section>

            <section className="space-y-gap-md stagger-3">
              <h2 className="border-l-4 border-primary pl-4 uppercase text-headline-h2">
                Email Channels
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <ContactItem
                  url="mailto:matteobosshard@gmail.com"
                  label="PERSONAL EMAIL"
                  icon="mail"
                />
                <ContactItem
                  url="mailto:matteo@bosshard.net"
                  label="BUSINESS EMAIL"
                  icon="mail"
                />
                <ContactItem
                  url="mailto:matteo.bosshard@wiss-edu.ch"
                  label="ACADEMIC EMAIL"
                  icon="mail"
                />
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
