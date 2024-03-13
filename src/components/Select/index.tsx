import React, { useState, ChangeEvent } from "react";
import "assets/css/inputs.scss";
import { SelectProps } from "types/components/Select";
import Option from "./Option";
import { v4 as uuidv4 } from "uuid";

export default function Select({
  labelSelect,
  items,
  onChangeValue,
  initialValueSelect,
  required,
}: SelectProps) {
  const [valueSelect, setValueSelect] = useState<string | number>(
    initialValueSelect || ""
  );
  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const valueChange = event.target.value;
    setValueSelect(valueChange);
    onChangeValue && onChangeValue(valueChange);
  };
  const uniqueId = uuidv4();

  return (
    <div className="form-floating mb-5">
      <select
        id={uniqueId}
        className="form-select"
        required={required}
        aria-label={labelSelect}
        value={valueSelect}
        onChange={selectChange}
      >
        {items.map((item, index) => (
          <Option key={index} {...item} />
        ))}
      </select>
      <label>{labelSelect}</label>
    </div>
  );
}
