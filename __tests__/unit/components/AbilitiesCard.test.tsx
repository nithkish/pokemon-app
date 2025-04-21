import React from "react";
import { render, screen } from "@testing-library/react";
import AbilitiesCard from "@/components/abilities-card/AbilitiesCard";
import { Ability } from "@/types/pokemon";

describe("AbilitiesCard", () => {
  const mockAbilities: Ability[] = [
    { ability: { name: "overgrow" } },
    { ability: { name: "chlorophyll" } },
  ];

  it("renders the card header correctly", () => {
    render(<AbilitiesCard abilities={mockAbilities} />);
    expect(screen.getByText("Abilities")).toBeInTheDocument();
  });

  it("renders the correct number of abilities", () => {
    render(<AbilitiesCard abilities={mockAbilities} />);
    const abilityItems = screen.getAllByRole("listitem");
    expect(abilityItems).toHaveLength(mockAbilities.length);
  });

  it("displays the correct ability names", () => {
    render(<AbilitiesCard abilities={mockAbilities} />);
    mockAbilities.forEach((ability) => {
      expect(screen.getByText(ability.ability.name)).toBeInTheDocument();
    });
  });

  it("renders an empty list when no abilities are provided", () => {
    render(<AbilitiesCard abilities={[]} />);
    const abilityItems = screen.queryAllByRole("listitem");
    expect(abilityItems).toHaveLength(0);
  });
});
