import React from "react";

type LegalLayoutProps = {
  children: React.ReactNode;
  tabs: React.ReactNode;
};

export function LegalLayout({ children, tabs }: LegalLayoutProps) {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto border-2 border-[#F207A8] p-8 bg-black shadow-2xl">
        {tabs}
        <div className="space-y-12">{children}</div>
      </div>
    </main>
  );
}
