"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t-2">
      <p className="text-2xl text-center mt-8">
        © {currentYear} - Matteo Bosshard <br />
        All Rights Reserved.
      </p>
    </footer>
  );
}
