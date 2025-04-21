import React from "react";
import { render, screen } from "@testing-library/react";
import TypesCard from "@/components/types-card/TypesCard";
import { Type } from "@/types/pokemon";
import { mockTypes } from "../../__mockdata__/pokemon";

describe("TypesCard Component", () => {
  it("renders the TypesCard component with the correct header", () => {
    render(<TypesCard types={mockTypes} />);
    expect(screen.getByText("Types")).toBeInTheDocument();
  });

  it("renders the correct number of types", () => {
    render(<TypesCard types={mockTypes} />);
    const typeElements = screen.getAllByRole("listitem");
    expect(typeElements).toHaveLength(mockTypes.length);
  });

  it("displays the correct type names", () => {
    render(<TypesCard types={mockTypes} />);
    mockTypes.forEach((type) => {
      expect(screen.getByText(type.type.name)).toBeInTheDocument();
    });
  });

  it("renders an empty list when no types are provided", () => {
    render(<TypesCard types={[]} />);
    const typeElements = screen.queryAllByRole("listitem");
    expect(typeElements).toHaveLength(0);
  });

  it("renders correctly when a single type is provided", () => {
    const singleType: Type[] = [{ type: { name: "electric" } }];
    render(<TypesCard types={singleType} />);
    const typeElements = screen.getAllByRole("listitem");
    expect(typeElements).toHaveLength(1);
    expect(screen.getByText("electric")).toBeInTheDocument();
  });
});
