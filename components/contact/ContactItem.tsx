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
      className="flex justify-between items-center px-6 py-5 bg-surface-container border-2 border-outline-variant hover:border-primary hover:bg-surface-bright transition-all duration-200 group w-full active:scale-[0.99]"
    >
      <div className="flex items-center gap-4">
        <ContactIcon
          name={icon}
          size={20}
          strokeWidth={2}
          className="text-text-secondary group-hover:text-primary transition-colors duration-200"
        />
        <span className="text-label-mono text-xs md:text-sm font-bold text-white group-hover:text-primary transition-colors duration-200">
          {label}
        </span>
      </div>
      <ArrowRight
        className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
        size={18}
      />
    </Link>
  );
}
