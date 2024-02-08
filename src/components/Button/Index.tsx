import React from "react";
import "./button.scss";
import { ButtonProps } from "types/components/Button";

export default function Button({
  title,
  classNameType,
  onClickProp,
}: ButtonProps) {
  return (
    <button
      className={classNameType}
      onClick={onClickProp}
    >
      {title}
    </button>
  );
}
