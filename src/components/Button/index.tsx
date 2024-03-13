import "./button.scss";
import { ButtonProps } from "types/components/Button";

export default function Button({
  title,
  classNameType,
  spinner,
  disabled,
  onClickProp,
}: ButtonProps) {
  return (
    <button
      className={`button ${classNameType}`}
      onClick={onClickProp}
      disabled={disabled}
    >
      {spinner === true && (
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
      )}

      {title}
    </button>
  );
}
