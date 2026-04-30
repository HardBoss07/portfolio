import React from "react";

type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
  isNotice?: boolean;
};

export function LegalSection({ title, children, isNotice }: LegalSectionProps) {
  return (
    <div
      className={`space-y-4 ${isNotice ? "p-4 border-l-4 border-[#F207A8] bg-white/5 italic" : ""}`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </div>
  );
}
