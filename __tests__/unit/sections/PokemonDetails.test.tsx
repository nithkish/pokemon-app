import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonDetails from "@/sections/pokemon-details/PokemonDetails";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";
import { mockPokemonDetails } from "../../mockData/pokemon";

jest.mock("@/providers/GlobalContextProvider", () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock("@/providers/FavouriteContextProvider", () => ({
  useFavouritesContext: jest.fn(),
}));

jest.mock("@/components/error-screen/ErrorScreen", () =>
  jest.fn(() => <div>Error Screen</div>)
);
jest.mock("@/components/image-card/ImageCard", () =>
  jest.fn(() => <div>Image Card</div>)
);
jest.mock("@/components/physical-card/PhysicalCard", () =>
  jest.fn(() => <div>Physical Card</div>)
);
jest.mock("@/components/base-stats-card/BaseStatsCard", () =>
  jest.fn(() => <div>Base Stats Card</div>)
);
jest.mock("@/components/abilities-card/AbilitiesCard", () =>
  jest.fn(() => <div>Abilities Card</div>)
);
jest.mock("@/components/types-card/TypesCard", () =>
  jest.fn(() => <div>Types Card</div>)
);

describe("PokemonDetails Section", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders ErrorScreen if no pokemon details are found", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({ pokemonListDetails: [] });
    (useFavouritesContext as jest.Mock).mockReturnValue({
      favouritesListDetails: [],
    });

    render(<PokemonDetails id={999} />);

    expect(screen.getByText("Error Screen")).toBeInTheDocument();
  });

  it("renders the PokemonDetails component with the correct data", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      pokemonListDetails: [mockPokemonDetails],
    });
    (useFavouritesContext as jest.Mock).mockReturnValue({
      favouritesListDetails: [],
    });

    render(<PokemonDetails id={1} />);

    expect(screen.getByText("Image Card")).toBeInTheDocument();
    expect(screen.getByText("Physical Card")).toBeInTheDocument();
    expect(screen.getByText("Base Stats Card")).toBeInTheDocument();
    expect(screen.getByText("Abilities Card")).toBeInTheDocument();
    expect(screen.getByText("Types Card")).toBeInTheDocument();
  });
});
