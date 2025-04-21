export default function Header() {
    return (
        <header className="p-4 flex items-center justify-between border-b-2 mb-8">
            <div className="flex items-center gap-x-4">
                <a
                    href="/"
                    className="text-3xl border-2 border-current px-6 py-0 rounded-full hover:bg-[#F207A8] hover:text-black transition-colors min-w-[12rem]"
                >
                    Home
                </a>
                <a
                    href="/projects"
                    className="text-3xl border-2 border-current px-6 py-0 rounded-full hover:bg-[#F207A8] hover:text-black transition-colors min-w-[12rem]"
                >
                    Projects
                </a>
                <a
                    href="/contact"
                    className="text-3xl border-2 border-current px-6 py-0 rounded-full hover:bg-[#F207A8] hover:text-black transition-colors min-w-[12rem]"
                >
                    Contact
                </a>
            </div>
            <a
                href="https://github.com/HardBoss07"
                target="_blank"
                className="text-right text-3xl border-2 border-current px-6 py-0 rounded-full transition-colors min-w-[12rem] bg-[#F207A8] text-black hover:bg-black hover:text-[#F207A8]"
            >
                GitHub
            </a>
        </header>
    );
}
