import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "components/Button/Index";

describe("Button component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders with the provided title and classNameType", () => {
    const title = "Submit Application";
    const classNameType = "primary";
    render(<Button title={title} classNameType={classNameType} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(title);
    expect(buttonElement).toHaveClass(classNameType);
  });

  it("should emmit events onClickProp function when clicked", () => {
    const onClickMock = jest.fn();
    const title = "Submit Application";
    render(<Button title={title} onClickProp={onClickMock} />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
