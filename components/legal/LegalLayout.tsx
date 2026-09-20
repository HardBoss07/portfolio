import type React from 'react';

type LegalLayoutProps = {
  children: React.ReactNode;
  tabs: React.ReactNode;
};

export function LegalLayout({ children, tabs }: LegalLayoutProps) {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-container-max mx-auto space-y-8">
          <div className="border-primary border-b-2 pb-4">
            <h1 className="font-headline m-0 text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold text-white uppercase">
              LEGAL NOTICES
            </h1>
          </div>
          <div className="bg-surface-container border-outline-variant border-2 p-6 md:p-10">
            {tabs}
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
