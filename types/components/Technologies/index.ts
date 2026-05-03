import { FunctionComponent } from "react";

export interface Technology {
  label: string;
  icon: FunctionComponent;
}

export interface TechnologiesRowProps {
  row: Technology[];
  rowIndex: number;
  baseDuration: number;
  modifiers: number[];
}
