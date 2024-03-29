import {OptionProps} from "types/components/Options"
export interface SelectProps {
  labelSelect?: string;
  initialValueSelect?: string | number ;
  onChangeValue?: (value: string | number) => void; 
  required?: boolean;
  items: OptionProps[];
}