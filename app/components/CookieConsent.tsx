"use client";
import {useEffect, useState} from "react";

export default function CookieConsent() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("cookie-consent");
        if (!saved) setOpen(true);
    }, []);

    const accept = (type: "necessary" | "all") => {
        localStorage.setItem("cookie-consent", type);
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
            <div className="border-2 bg-black text-[#F207A8] p-4 rounded-lg max-w-4xl mx-auto shadow-xl">
                <p className="text-xl pb-4">
                    This site uses necessary cookies (fonts). YouTube videos require optional cookies.
                </p>

                <div className="flex gap-4 justify-end">
                    <button
                        onClick={() => accept("necessary")}
                        className="border-2 border-[#F207A8] px-6 py-2 rounded-full text-xl transition-colors hover:bg-[#F207A8] hover:text-black"
                    >
                        Only necessary
                    </button>

                    <button
                        onClick={() => accept("all")}
                        className="border-2 border-[#F207A8] px-6 py-2 rounded-full bg-[#F207A8] text-black text-xl transition-colors hover:bg-black hover:text-[#F207A8]"
                    >
                        Accept all
                    </button>
                </div>
            </div>
        </div>
    );
}
