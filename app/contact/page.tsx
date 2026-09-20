import type { Metadata } from 'next';
import ContactItem from '@/components/contact/ContactItem';

export const metadata: Metadata = {
  title: 'Contact | Matteo Bosshard',
  description:
    'Get in touch with Matteo Bosshard, a Swiss-based Fullstack Developer, for collaborations or inquiries regarding software development projects.',
  alternates: {
    canonical: 'https://m4tt3o.dev/contact',
  },
  openGraph: {
    title: 'Contact | Matteo Bosshard Portfolio',
    description: 'Contact Matteo Bosshard for software development projects and collaborations.',
    url: 'https://m4tt3o.dev/contact',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <main>
      <section className="section-padding">
        <section className="animate-entry flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className="h-fit flex-1 lg:sticky lg:top-32">
            <h1 className="font-headline mb-4 text-[clamp(2.8rem,7vw,4.5rem)] leading-[0.95] font-extrabold tracking-tight uppercase">
              LET&apos;S <br />
              <span className="text-primary">CONNECT</span>
            </h1>
          </div>

          <div className="w-full flex-[1.4] space-y-8">
            <section className="space-y-3">
              <div className="border-outline-variant flex items-center justify-between border-b-2 pb-2">
                <h2 className="m-0 text-lg font-extrabold text-white uppercase md:text-xl">
                  Social & Direct
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <ContactItem
                  url="https://github.com/HardBoss07"
                  label="@HardBoss07"
                  icon="github"
                />
                <ContactItem url="https://linkedin.com/in/m4tt3o" label="@m4tt3o" icon="linkedin" />
                <ContactItem
                  url="https://instagram.com/matteoluca07"
                  label="@matteoluca07"
                  icon="instagram"
                />
                <ContactItem url="https://discord.com" label="@m4tt3o" icon="discord" />
              </div>
            </section>

            <section className="space-y-3">
              <div className="border-outline-variant flex items-center justify-between border-b-2 pb-2">
                <h2 className="m-0 text-lg font-extrabold text-white uppercase md:text-xl">
                  Email Inboxes
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
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
                <ContactItem
                  url="mailto:matteo.bosshard@wiss-edu.ch"
                  label="matteo.bosshard@wiss-edu.ch"
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
