import React from "react";
import styles from "@/styles/PreferenceToggle.module.css";
import { PreferenceToggleProps } from "@/types/components/PreferenceToggle";

export function PreferenceToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: PreferenceToggleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <label
        className={`${styles.toggleWrapper} ${
          disabled ? styles.toggleWrapperDisabled : styles.toggleWrapperEnabled
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className={styles.toggleInput}
        />
        <div
          className={`${styles.toggleTrack} ${
            checked ? styles.toggleTrackOn : styles.toggleTrackOff
          }`}
        >
          <div
            className={`${styles.toggleThumb} ${
              checked ? styles.toggleThumbOn : ""
            }`}
          />
        </div>
      </label>
    </div>
  );
}
