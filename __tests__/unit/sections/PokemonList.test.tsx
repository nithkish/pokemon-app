import { render, screen } from "@testing-library/react";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import PokemonList from "@/sections/pokemon-list/PokemonList";

jest.mock("@/providers/GlobalContextProvider", () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock("@/components/error-screen/ErrorScreen", () =>
  jest.fn(() => <div>Error Screen</div>)
);
jest.mock("@/components/list-skeleton/ListSkeleton", () =>
  jest.fn(() => <div>Loading...</div>)
);
jest.mock("@/components/pokemon-card/PokemonCard", () =>
  jest.fn(({ pokemon }) => <div>{pokemon.name}</div>)
);
jest.mock("@/components/pagination/Pagination", () =>
  jest.fn(({ pageCount }) => <div>Pagination: {pageCount}</div>)
);

describe("PokemonList Section", () => {
  it("renders loading state", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      pokemonListDetails: [],
      maxPage: 0,
    });

    render(<PokemonList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      loading: false,
      error: true,
      pokemonListDetails: [],
      maxPage: 0,
    });

    render(<PokemonList />);

    expect(screen.getByText("Error Screen")).toBeInTheDocument();
  });

  it("renders pokemon list and pagination", () => {
    const mockPokemonList = [{ name: "Pikachu" }, { name: "Charmander" }];

    (useGlobalContext as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      pokemonListDetails: mockPokemonList,
      maxPage: 5,
    });

    render(<PokemonList />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
    expect(screen.getByText("Pagination: 5")).toBeInTheDocument();
  });
});
