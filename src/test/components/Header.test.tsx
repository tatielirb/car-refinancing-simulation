import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "components/Header/Index";

describe("Header component", () => {
  test("renders with the provided title", () => {
    const title = "Car Refinancing Simulation";
    render(<Header title={title} />);

    const headerElement = screen.getByText(title);
    expect(headerElement).toBeInTheDocument();
  });
});
