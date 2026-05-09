import React from "react";

type LegalLayoutProps = {
  children: React.ReactNode;
  tabs: React.ReactNode;
};

export function LegalLayout({ children, tabs }: LegalLayoutProps) {
  return (
    <main className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-container-max mx-auto space-y-gap-lg">
          <div className="inline-block border-b-4 border-primary pb-2">
            <h1 className="uppercase">LEGAL COMPLIANCE</h1>
          </div>
          <div className="bg-surface-variant/10 border-2 border-outline-variant p-8 md:p-12">
            {tabs}
            <div className="space-y-12">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
