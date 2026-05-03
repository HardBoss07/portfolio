"use client";

import React, { useState, useEffect } from "react";
import { ExperienceProps, ExperienceState } from "@/types/components/Experience";

export default function Experience({ startYear }: ExperienceProps) {
  const [years, setYears] = useState<ExperienceState>(null);

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
