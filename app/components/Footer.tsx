export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t-2">
            <p className="text-2xl text-center mt-8">
                © {currentYear} - Matteo Bosshard <br/>
                All Rights Reserved.
            </p>
        </footer>
    );
}