"use client";
import {useEffect, useState} from "react";

export default function YouTubeWrapper({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const c = localStorage.getItem("cookie-consent");
        if (c === "all") setAllowed(true);
    }, []);

    if (allowed) return <>{children}</>;

    return (
        <div
            className="video-wrapper flex flex-col items-center justify-center bg-black border-2 border-t-0 text-center p-6">
            <p className="text-xl mb-4">
                This video requires optional cookies (YouTube).
            </p>

            <button
                className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-xl transition-colors hover:bg-[#F207A8] hover:text-black"
                onClick={() => {
                    localStorage.setItem("cookie-consent", "all");
                    setAllowed(true);
                }}
            >
                Accept & load video
            </button>
        </div>
    );
}
