import React, {useState, ChangeEvent} from "react";
import { SelectProps } from "types/components/Select";
import Option from "./Option";

export default function Select({
  labelSelect,
  items,
  onChange,
  initialValue,
  // valueSelect,
  // handleChange,
}: SelectProps) {
  const [valueSelect, setValueSelect] = useState(initialValue || '');
  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const valueChange = event.target.value;
    setValueSelect(valueChange);
    onChange && onChange(valueChange); // Aciona a função de retorno de chamada
    console.log(valueChange)
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
