import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Select from "components/Select/Index";

jest.mock(
  "components/Select/Option",
  () =>
    ({ label, value }: { label: string; value: string }) =>
      <option value={value}>{label}</option>
);

describe("Select Component", () => {
  const mockSelectProps = {
    labelSelect: "Test Label",
    items: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
    ],
    onChangeValue: jest.fn(),
    initialValueSelect: "option1",
    required: true,
  };

  it("renders Select component correctly", () => {
    const { getByLabelText, getByText } = render(
      <Select {...mockSelectProps} />
    );

    const selectElement = screen.getByLabelText(
      "Test Label"
    ) as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("option1");
  });

  it("calls onChangeValue when the select value changes", () => {
    const { getByLabelText } = render(<Select {...mockSelectProps} />);

    const selectElement = screen.getByLabelText("Test Label");
    fireEvent.change(selectElement, { target: { value: "option2" } });

    expect(mockSelectProps.onChangeValue).toHaveBeenCalledWith("option2");
  });

  it("renders options correctly", () => {
    const { getByText } = render(<Select {...mockSelectProps} />);

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });
});
