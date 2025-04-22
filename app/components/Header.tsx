export default function Header() {
    return (
        <header className="p-4 flex items-center justify-between border-b-2 mb-8">
            <div className="flex items-center gap-x-4">
                <a
                    href="/"
                >
                    Home
                </a>
                <a
                    href="/projects"

                >
                    Projects
                </a>
                <a
                    href="/contact"
                >
                    Contact
                </a>
            </div>
            <a
                href="https://github.com/HardBoss07"
                target="_blank"
                className="a-inverted"
            >
                GitHub
            </a>
        </header>
    );
}
