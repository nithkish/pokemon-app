import { renderHook, waitFor } from "@testing-library/react";
import { usePokemonData } from "@/hooks/usePokemonData";
import { getPokemons } from "@/actions/get-pokemons";
import { mockPokemonAPIResponse } from "../../mockData/pokemon";

jest.mock("axios");
jest.mock("@/actions/get-pokemons");

const mockedGetPokemons = getPokemons as jest.MockedFunction<
  typeof getPokemons
>;

describe("usePokemonData Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all pokemons on initial render", async () => {
    mockedGetPokemons.mockResolvedValueOnce(mockPokemonAPIResponse);

    const { result } = renderHook(() => usePokemonData(1));

    await waitFor(() => {
      expect(mockedGetPokemons).toHaveBeenCalledTimes(2);
      expect(result.current.allPokemons).toEqual(
        mockPokemonAPIResponse.results
      );
      expect(result.current.maxPage).toEqual(
        Math.ceil(mockPokemonAPIResponse.count / 20)
      );
    });
  });

  it("should fetch pokemon list for the current page", async () => {
    mockedGetPokemons.mockResolvedValueOnce(mockPokemonAPIResponse);

    const { result } = renderHook(() => usePokemonData(1));

    await waitFor(() => {
      expect(mockedGetPokemons).toHaveBeenCalledWith(2);
      expect(result.current.pokemonList[1]).toEqual(
        mockPokemonAPIResponse.results
      );
    });
  });

  it("should handle errors during fetching", async () => {
    mockedGetPokemons.mockRejectedValueOnce(new Error("Failed to fetch"));

    const { result } = renderHook(() => usePokemonData(1));

    await waitFor(() => {
      expect(result.current.error).toEqual("An unexpected error occurred");
      expect(result.current.loading).toBe(false);
    });
  });
});
