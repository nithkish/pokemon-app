import { renderHook, act, waitFor } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { useFavouritesData } from "@/hooks/useFavouritesData";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useFavouritesData Hook", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFavouritesData());

    expect(result.current.favouritesListDetails).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should fetch Pokemon details successfully", async () => {
    const mockFavourites = { favourites: [1, 2] };
    const mockPokemonDetails = [
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Ivysaur" },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetails[0] });
    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetails[1] });

    const { result } = renderHook(() => useFavouritesData());

    act(() => {
      result.current.fetchPokemonDetails(mockFavourites);
    });

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.favouritesListDetails).toEqual(mockPokemonDetails);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it("should handle errors when fetching Pokemon details", async () => {
    const mockFavourites = { favourites: [1] };
    mockedAxios.get.mockRejectedValueOnce("");

    const { result } = renderHook(() => useFavouritesData());

    act(() => {
      result.current.fetchPokemonDetails(mockFavourites);
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.favouritesListDetails).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe("An unexpected error occurred");
    });
  });

  it("should fetch Pokemon details by ID successfully", async () => {
    const mockPokemonDetail = { id: 1, name: "Bulbasaur" };

    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetail });

    const { result } = renderHook(() => useFavouritesData());

    act(() => {
      result.current.fetchPokemonDetailsById(1);
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.favouritesListDetails).toEqual([mockPokemonDetail]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it("should handle errors when fetching Pokemon details by ID", async () => {
    mockedAxios.get.mockRejectedValueOnce("");

    const { result } = renderHook(() => useFavouritesData());

    act(() => {
      result.current.fetchPokemonDetailsById(1);
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.favouritesListDetails).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe("An unexpected error occurred");
    });
  });
});
