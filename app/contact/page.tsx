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
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start animate-entry">
          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            <h1 className="uppercase font-headline font-extrabold text-[clamp(2.8rem,7vw,4.5rem)] leading-[0.95] tracking-tight mb-4">
              LET&apos;S <br />
              <span className="text-primary">CONNECT.</span>
            </h1>
          </div>

          <div className="flex-[1.4] w-full space-y-8">
            <section className="space-y-3">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-2">
                <h2 className="uppercase text-lg md:text-xl font-extrabold text-white m-0">
                  Social & Direct
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
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

            <section className="space-y-3">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-2">
                <h2 className="uppercase text-lg md:text-xl font-extrabold text-white m-0">
                  Email Inboxes
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
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
