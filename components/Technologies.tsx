"use client";

import React from "react";
import { technologies } from "@/lib/technologies";
import styles from "./Technologies.module.css";
import { TechnologiesRowProps, Technology } from "@/types/components/Technologies";

const NUM_ROWS = 5;
const BASE_DURATION_PER_ITEM = 5; // Seconds per item
const MODIFIERS = [1, 1.3, 1.15]; // Speed multipliers for each row

const TechnologyRow: React.FC<TechnologiesRowProps> = ({
  row,
  rowIndex,
  baseDuration,
  modifiers,
}) => {
  const duration = `${row.length * baseDuration * modifiers[rowIndex % modifiers.length]}s`;
  const isReverse = rowIndex % 2 === 0;
  const animationClass = isReverse
    ? styles.animateMarqueeReverse
    : styles.animateMarquee;

  return (
    <div
      className={styles.rowWrapper}
      style={
        {
          "--duration": duration,
        } as React.CSSProperties
      }
    >
      <div className={`${styles.marqueeContainer} ${animationClass}`}>
        {row.concat(row).map(({ label, icon: Icon }: Technology, index: number) => (
          <div key={`${label}-${index}`} className={styles.technologyItem}>
            <div className={styles.iconWrapper}>
              <Icon />
            </div>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Technologies() {
  // Programmatically split technologies into NUM_ROWS sub-arrays
  const rows = Array.from({ length: NUM_ROWS }, (_, i) =>
    technologies.filter((_, index) => index % NUM_ROWS === i),
  );

  return (
    <div className={styles.technologiesContainer}>
      <div className={styles.rowsList}>
        {rows.map((row, rowIndex) => (
          <TechnologyRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            baseDuration={BASE_DURATION_PER_ITEM}
            modifiers={MODIFIERS}
          />
        ))}
      </div>
    </div>
  );
}
