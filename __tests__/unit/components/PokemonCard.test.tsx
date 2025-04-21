import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { PokemonDetails } from "@/types/pokemon";
import { mockPokemonDetails } from "../../__mockdata__/pokemon";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("PokemonCard Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it("renders the PokemonCard component with the correct name and image", () => {
    render(<PokemonCard pokemon={mockPokemonDetails} />);

    const pokemonName = screen.getByText(/bulbasaur/i);
    const pokemonImage = screen.getByAltText(/pokemon image/i);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });

  it("navigates to the correct URL when the card is clicked", () => {
    render(<PokemonCard pokemon={mockPokemonDetails} />);

    const card = screen.getByTestId("pokemon-card");
    fireEvent.click(card);

    expect(mockPush).toHaveBeenCalledWith("/pokemon/1");
  });

  it("handles missing image gracefully", () => {
    const pokemonWithoutImage = {
      ...mockPokemonDetails,
      sprites: {
        ...mockPokemonDetails.sprites,
        other: { home: { front_default: "" } },
      },
    };
    render(<PokemonCard pokemon={pokemonWithoutImage} />);

    const pokemonImage = screen.getByAltText(/pokemon image/i);
    expect(pokemonImage).toBeDefined();
  });

  it("handles missing name gracefully", () => {
    const pokemonWithoutName = { ...mockPokemonDetails, name: "" };
    render(<PokemonCard pokemon={pokemonWithoutName} />);

    const pokemonName = screen.getByRole("heading");
    expect(pokemonName).toBeInTheDocument();
  });

  it("does not throw an error when pokemon prop is undefined", () => {
    render(<PokemonCard pokemon={undefined as unknown as PokemonDetails} />);

    const pokemonName = screen.queryByText(/bulbasaur/i);

    expect(pokemonName).not.toBeInTheDocument();
  });

  it("renders the name in capitalized format", () => {
    const mockPokemonWithLowercaseName = {
      ...mockPokemonDetails,
      name: "pikachu",
    };
    render(<PokemonCard pokemon={mockPokemonWithLowercaseName} />);

    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toHaveClass("capitalize");
  });
});
