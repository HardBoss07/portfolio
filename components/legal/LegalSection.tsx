import React from 'react';

type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
  isNotice?: boolean;
};

export function LegalSection({ title, children, isNotice }: LegalSectionProps) {
  return (
    <div className={`space-y-4 ${isNotice ? 'border-primary bg-primary/5 border-l-4 p-6' : ''}`}>
      <h2 className="text-headline-h2 mb-4 font-semibold uppercase">{title}</h2>
      <div className="text-body-md text-text-secondary space-y-4 leading-relaxed">{children}</div>
    </div>
  );
}
