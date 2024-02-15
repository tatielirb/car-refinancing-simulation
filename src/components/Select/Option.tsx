import React from "react";
import { OptionProps } from "types/components/Select";

export default function Option({ value, label }: OptionProps) {
  return <option value={value}>{label}</option>;
}
