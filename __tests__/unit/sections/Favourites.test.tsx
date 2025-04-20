import React from "react";
import { render, screen } from "@testing-library/react";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";
import Favourites from "@/sections/favourites/Favourites";

jest.mock("@/providers/FavouriteContextProvider", () => ({
  useFavouritesContext: jest.fn(),
}));

jest.mock("@/components/list-skeleton/ListSkeleton", () =>
  jest.fn(() => <div data-testid="list-skeleton" />)
);
jest.mock("@/components/error-screen/ErrorScreen", () =>
  jest.fn(() => <div data-testid="error-screen" />)
);
jest.mock("@/components/no-favourites/NoFavourites", () =>
  jest.fn(() => <div data-testid="no-favourites" />)
);
jest.mock("@/components/pokemon-card/PokemonCard", () =>
  jest.fn(({ pokemon }) => <div data-testid="pokemon-card">{pokemon.name}</div>)
);

describe("Favourites Section", () => {
  it("renders loading state", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      favourites: [],
      favouritesListDetails: [],
    });

    render(<Favourites />);
    expect(screen.getByTestId("list-skeleton")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      loading: false,
      error: true,
      favourites: [],
      favouritesListDetails: [],
    });

    render(<Favourites />);
    expect(screen.getByTestId("error-screen")).toBeInTheDocument();
  });

  it("renders no favourites state", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      favourites: [],
      favouritesListDetails: [],
    });

    render(<Favourites />);
    expect(screen.getByTestId("no-favourites")).toBeInTheDocument();
  });

  it("renders favourites list", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      favourites: [1, 2],
      favouritesListDetails: [
        { id: 1, name: "Pikachu" },
        { id: 2, name: "Charmander" },
        { id: 3, name: "Bulbasaur" },
      ],
    });

    render(<Favourites />);
    const pokemonCards = screen.getAllByTestId("pokemon-card");
    expect(pokemonCards).toHaveLength(2);
    expect(pokemonCards[0]).toHaveTextContent("Pikachu");
    expect(pokemonCards[1]).toHaveTextContent("Charmander");
  });
});
