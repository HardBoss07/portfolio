import React from "react";

export type IconName =
  | "github"
  | "instagram"
  | "linkedin"
  | "mail"
  | "discord"
  | "steam";

export interface ContactIconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
