import Link from "next/link";
import { ContactIcon, IconName } from "@/components/contact/ContactIcon";
import { ArrowRight } from "lucide-react";

export interface ContactItemProps {
  url: string;
  label: string;
  icon: IconName;
}

export default function ContactItem({ url, label, icon }: ContactItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center p-6 bg-surface-variant/20 border-2 border-outline-variant hover:border-primary transition-colors group w-full"
    >
      <div className="flex items-center gap-4">
        <ContactIcon
          name={icon}
          size={24}
          strokeWidth={2}
          className="text-primary"
        />
        <span className="text-label-mono font-bold">{label}</span>
      </div>
      <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
    </Link>
  );
}
