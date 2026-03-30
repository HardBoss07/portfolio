"use client";

import { useState, useEffect } from "react";

interface ExperienceProps {
  startYear: number;
}

export default function Experience({ startYear }: ExperienceProps) {
  const [years, setYears] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    let calculatedYears = currentYear - startYear;

    if (currentMonth < 2) {
      calculatedYears--;
    }
    setYears(calculatedYears);
  }, [startYear]);

  return <>{years ?? "..."}</>;
}
