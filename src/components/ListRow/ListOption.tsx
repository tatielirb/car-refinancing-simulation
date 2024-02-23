import React from "react";
import { OptionProps } from "types/components/Options";

export default function ListOption({ value, label }: OptionProps) {
  return (
    <li className="list-group-item">
      <p className="personal-form--fees-title">{label}</p>
      <span className="personal-form--fees-value">{value}</span>
    </li>
  );
}
