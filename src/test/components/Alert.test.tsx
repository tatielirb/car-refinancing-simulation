import React from "react";
import Alert from "components/Alert/Index";
import { render, screen } from "@testing-library/react";

describe("Alert component", () => {
  test("renders alert component with provided props", () => {
    const message = "This is a test message";
    const type = "success";
    const iconName = "check-circle";

    render(<Alert message={message} type={type} iconName={iconName} />);

    const alertComponent = screen.getByTestId("alert-component");
    expect(alertComponent).toBeInTheDocument();
    expect(alertComponent).toHaveClass(`alert-${type}`);
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByTestId("alert-icon")).toHaveClass(`bi-${iconName}`);
  });
});