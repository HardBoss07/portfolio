interface RepositoryButtonProps {
    link: string;
}

export default function RepositoryButton({ link }: RepositoryButtonProps) {
    return (
        <a
            href={link}
            target="_blank"
            className="ml-auto flex items-center justify-center gap-2 rounded-full border-2 border-current bg-[#F207A8] px-6 py-0 text-2xl text-left text-black transition-colors hover:bg-black hover:text-[#F207A8] w-[13rem]"
        >
            <span>Repository</span>
            <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path
                    d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"/>
            </svg>
        </a>
    );
}
