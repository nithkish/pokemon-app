import React from "react";
import { render, screen } from "@testing-library/react";
import PhysicalCard from "@/components/physical-card/PhysicalCard";

describe("PhysicalCard Component", () => {
  it("renders the PhysicalCard component with correct props", () => {
    render(<PhysicalCard weight={60} height={1.8} baseExperience={200} />);

    expect(screen.getByText("Height : 1.8 M")).toBeInTheDocument();
    expect(screen.getByText("Weight : 60 Kg")).toBeInTheDocument();
    expect(screen.getByText("Base Exp : 200 Xp")).toBeInTheDocument();
  });

  it("renders the header correctly", () => {
    render(<PhysicalCard weight={60} height={1.8} baseExperience={200} />);

    expect(screen.getByText("Physical Attributes")).toBeInTheDocument();
  });

  it("handles large values for weight, height, and base experience", () => {
    render(<PhysicalCard weight={999} height={99.9} baseExperience={9999} />);

    expect(screen.getByText("Height : 99.9 M")).toBeInTheDocument();
    expect(screen.getByText("Weight : 999 Kg")).toBeInTheDocument();
    expect(screen.getByText("Base Exp : 9999 Xp")).toBeInTheDocument();
  });

  it("handles small values for weight, height, and base experience", () => {
    render(<PhysicalCard weight={0.1} height={0.05} baseExperience={1} />);

    expect(screen.getByText("Height : 0.05 M")).toBeInTheDocument();
    expect(screen.getByText("Weight : 0.1 Kg")).toBeInTheDocument();
    expect(screen.getByText("Base Exp : 1 Xp")).toBeInTheDocument();
  });

  it("renders correctly with zero values", () => {
    render(<PhysicalCard weight={0} height={0} baseExperience={0} />);

    expect(screen.getByText("Height : 0 M")).toBeInTheDocument();
    expect(screen.getByText("Weight : 0 Kg")).toBeInTheDocument();
    expect(screen.getByText("Base Exp : 0 Xp")).toBeInTheDocument();
  });

  it("renders without crashing when no props are provided", () => {
    // @ts-expect-error Testing behavior with missing props
    render(<PhysicalCard />);

    expect(screen.queryByText("Height :")).not.toBeInTheDocument();
    expect(screen.queryByText("Weight :")).not.toBeInTheDocument();
    expect(screen.queryByText("Base Exp :")).not.toBeInTheDocument();
  });
});
