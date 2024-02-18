import { ChangeEvent } from "react";

export interface SelectProps {
  labelSelect?: string;
  initialValue?: string | number | readonly string[];
  onChange?: (value: string) => void; 
  // handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  items: OptionProps[];
}

export interface OptionProps {
  value?: string | number | readonly string[];
  label?: string;
}
