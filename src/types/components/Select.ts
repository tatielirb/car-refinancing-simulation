export interface SelectProps {
  labelSelect?: string;
  initialValueSelect?: string | number ;
  onChangeValue?: (value: string | number) => void; 
  required?: boolean;
  items: OptionProps[];
}

export interface OptionProps {
  value?: string | number | readonly string[];
  label?: string;
}
