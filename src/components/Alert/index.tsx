import { AlertProps } from "types/components/Alert";
import "./alert.scss";

export default function Alert({ message, type, iconName }: AlertProps) {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
      data-testid="alert-component"
    >
      <i className={`bi bi-${iconName} me-2`} data-testid="alert-icon"></i>{" "}
      {message}
    </div>
  );
}
