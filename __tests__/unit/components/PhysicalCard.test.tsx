import React from "react";
import { render, screen } from "@testing-library/react";
import PhysicalCard from "@/components/physical-card/PhysicalCard";

describe("PhysicalCard Component", () => {
  const mockProps = {
    weight: 70,
    height: 1.8,
    baseExperience: 200,
  };

  it("renders the PhysicalCard component with correct header", () => {
    render(<PhysicalCard {...mockProps} />);
    expect(screen.getByText("Physical Attributes")).toBeInTheDocument();
  });

  it("displays the correct height", () => {
    render(<PhysicalCard {...mockProps} />);
    expect(screen.getByText("1.8 M")).toBeInTheDocument();
  });

  it("displays the correct weight", () => {
    render(<PhysicalCard {...mockProps} />);
    expect(screen.getByText("70 Kg")).toBeInTheDocument();
  });

  it("displays the correct base experience", () => {
    render(<PhysicalCard {...mockProps} />);
    expect(screen.getByText("200 Xp")).toBeInTheDocument();
  });

  it("renders the correct number of attributes", () => {
    render(<PhysicalCard {...mockProps} />);
    const attributes = screen.getAllByRole("paragraph");
    expect(attributes).toHaveLength(3);
  });

  it("handles large values for weight, height, and base experience", () => {
    const largeProps = {
      weight: 999,
      height: 99.9,
      baseExperience: 9999,
    };
    render(<PhysicalCard {...largeProps} />);
    expect(screen.getByText("99.9 M")).toBeInTheDocument();
    expect(screen.getByText("999 Kg")).toBeInTheDocument();
    expect(screen.getByText("9999 Xp")).toBeInTheDocument();
  });
});
