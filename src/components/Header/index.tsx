import React from "react";
import "./header.scss";
import { HeaderProps } from "types/components/Header";

export default function Header({ title }: HeaderProps) {
  return (
    <div className="header">
      <header>
        <h1 className="fs-4 fw-bold p-3">{title}</h1>
      </header>
    </div>
  );
}
