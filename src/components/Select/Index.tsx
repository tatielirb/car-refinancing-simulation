import React from "react";
import { SelectProps } from "types/components/Select";
import Option from "./Option";

export default function Select({
  labelSelect,
  items,
  valueSelect,
  handleChange,
}: SelectProps) {
  return (
    <div className="form-floating mb-5">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label={labelSelect}
        value={valueSelect}
        onChange={handleChange}
      >
        {items.map((item, index) => (
          <Option key={index} {...item} />
        ))}
      </select>
      <label htmlFor="floatingSelect">{labelSelect}</label>
    </div>
  );
}
