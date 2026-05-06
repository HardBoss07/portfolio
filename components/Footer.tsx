"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t-2 py-xl">
      <p className="text-2xl text-center">
        © {currentYear} - Matteo Bosshard <br />
        All Rights Reserved.
      </p>
      <div className="flex justify-center gap-lg mt-md text-lg">
        <Link
          href="/legal"
          className="hover:text-hot-pink underline decoration-hot-pink/30 hover:decoration-hot-pink transition-all duration-300 ease-out"
        >
          Legal Notice & Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
