export default function Header() {
    const isGitHubPages: boolean = false; // Change this variable to false for local development
    const prefix = isGitHubPages ? "/portfolio" : "";

    return (
        <header>
            <div>
                <a href={`${prefix}/`}>Home</a>
                <a href={`${prefix}/projects`}>Projects</a>
                <a href={`${prefix}/contact`}>Contact</a>
                <a href="https://github.com/HardBoss07" target="_blank">GitHub</a>
            </div>
        </header>
    );
}
