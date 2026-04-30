"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t-2 py-8">
      <p className="text-2xl text-center">
        © {currentYear} - Matteo Bosshard <br />
        All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4 text-lg">
        <Link
          href="/legal"
          className="hover:text-[#F207A8] underline transition-colors"
        >
          Legal Notice & Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
