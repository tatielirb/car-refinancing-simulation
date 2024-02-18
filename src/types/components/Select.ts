export interface SelectProps {
  labelSelect?: string;
  initialValueSelect?: string | number | readonly string[];
  onChangeValue?: (value: string) => void; 
  items: OptionProps[];
}

export interface OptionProps {
  value?: string | number | readonly string[];
  label?: string;
}
