import Link from 'next/link';
import { ContactIcon, IconName } from '@/components/contact/ContactIcon';
import { ArrowRight } from 'lucide-react';

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
      className="bg-surface-container border-outline-variant hover:border-primary hover:bg-surface-bright group flex w-full items-center justify-between border-2 px-6 py-5 transition-all duration-200 active:scale-[0.99]"
    >
      <div className="flex items-center gap-4">
        <ContactIcon
          name={icon}
          size={20}
          strokeWidth={2}
          className="text-text-secondary group-hover:text-primary transition-colors duration-200"
        />
        <span className="text-label-mono group-hover:text-primary text-xs font-bold text-white transition-colors duration-200 md:text-sm">
          {label}
        </span>
      </div>
      <ArrowRight
        className="text-text-secondary group-hover:text-primary transition-all duration-200 group-hover:translate-x-1"
        size={18}
      />
    </Link>
  );
}
