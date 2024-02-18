import React, {useState, ChangeEvent} from "react";
import "assets/css/inputs.scss";
import { SelectProps } from "types/components/Select";
import Option from "./Option";

export default function Select({
  labelSelect,
  items,
  onChangeValue,
  initialValueSelect,
}: SelectProps) {
  const [valueSelect, setValueSelect] = useState(initialValueSelect || '');
  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const valueChange = event.target.value;
    setValueSelect(valueChange);
    onChangeValue && onChangeValue(valueChange); 
  };
  return (
    <div className="form-floating mb-5">
      <select
        className="form-select"
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
