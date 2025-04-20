import { render, screen } from "@testing-library/react";
import AbilitiesCard from "@/components/abilities-card/AbilitiesCard";

describe("AbilitiesCard", () => {
  it("renders the card header", () => {
    render(<AbilitiesCard abilities={[]} />);
    expect(screen.getByText("Abilities")).toBeInTheDocument();
  });

  it("renders a list of abilities", () => {
    const abilities = [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
    ];

    render(<AbilitiesCard abilities={abilities} />);

    abilities.forEach((ability) => {
      expect(screen.getByText(ability.ability.name)).toBeInTheDocument();
    });
  });

  it("renders no abilities when the list is empty", () => {
    render(<AbilitiesCard abilities={[]} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("renders abilities with correct styling", () => {
    const abilities = [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
    ];

    render(<AbilitiesCard abilities={abilities} />);

    abilities.forEach((ability) => {
      const abilityElement = screen.getByText(ability.ability.name);
      expect(abilityElement).toHaveClass(
        "px-4 py-2 flex items-center gap-2 text-sm font-bold bg-white text-[#54a0ff] rounded-full"
      );
    });
  });

  it("renders the correct number of abilities", () => {
    const abilities = [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
      { ability: { name: "Solar Power" } },
    ];

    render(<AbilitiesCard abilities={abilities} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(abilities.length);
  });

  it("handles abilities with special characters in names", () => {
    const abilities = [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
      { ability: { name: "Solar Power!" } },
    ];

    render(<AbilitiesCard abilities={abilities} />);

    abilities.forEach((ability) => {
      expect(screen.getByText(ability.ability.name)).toBeInTheDocument();
    });
  });
});
