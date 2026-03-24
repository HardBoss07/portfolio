import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <div>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="https://github.com/HardBoss07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
