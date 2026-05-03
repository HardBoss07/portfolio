import Link from "next/link";
import { ContactIcon, IconName } from "./ContactIcon";

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
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '8px',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <ContactIcon
                name={icon}
                size={20}
                strokeWidth={2}
            />
            <span>{label}</span>
        </Link>
    );
}