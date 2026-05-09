import React from "react";

type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
  isNotice?: boolean;
};

export function LegalSection({ title, children, isNotice }: LegalSectionProps) {
  return (
    <div
      className={`space-y-4 ${isNotice ? "p-6 border-l-4 border-primary bg-primary/5" : ""}`}
    >
      <h2 className="text-headline-h2 font-semibold mb-4 uppercase">{title}</h2>
      <div className="text-body-md leading-relaxed space-y-4 text-text-secondary">
        {children}
      </div>
    </div>
  );
}
