export interface SelectProps {
  labelSelect?: string;
  valueSelect?: string | number | readonly string[];
  handleChange?: () => void;
  items: OptionProps[];
}

export interface OptionProps {
  value?: string | number | readonly string[];
  label?: string;
}
