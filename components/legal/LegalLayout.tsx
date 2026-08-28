import React from "react";

type LegalLayoutProps = {
  children: React.ReactNode;
  tabs: React.ReactNode;
};

export function LegalLayout({ children, tabs }: LegalLayoutProps) {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-container-max mx-auto space-y-8">
          <div className="border-b-2 border-primary pb-4">
            <h1 className="uppercase font-headline font-extrabold text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-white m-0">
              LEGAL NOTICES
            </h1>
          </div>
          <div className="bg-surface-container border-2 border-outline-variant p-6 md:p-10">
            {tabs}
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
