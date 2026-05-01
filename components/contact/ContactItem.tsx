import Link from "next/link";

export interface ContactItemProps {
    url: string;
    label: string;
}

export default function ContactItem({ url, label }: ContactItemProps) {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
        </Link>
    );
}
