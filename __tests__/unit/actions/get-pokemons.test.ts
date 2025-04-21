import { getPokemons } from "@/actions/get-pokemons";
import axios from "axios";
import { BASE_API_URL, ITEMS_PER_PAGE } from "@/constants/api";
import { PokemonAPIResponse } from "@/types/pokemon";

jest.mock("axios");

describe("getPokemons Action", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all Pokémon when no page is provided", async () => {
    const mockResponse: PokemonAPIResponse = {
      count: 1118,
      next: null,
      previous: null,
      results: [],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await getPokemons();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BASE_API_URL}/pokemon?limit=1300`
    );
    expect(result).toEqual(mockResponse);
  });

  it("should fetch paginated Pokémon when a page is provided", async () => {
    const page = 2;
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const mockResponse: PokemonAPIResponse = {
      count: 1118,
      next: null,
      previous: null,
      results: [],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await getPokemons(page);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BASE_API_URL}/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if the API request fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(getPokemons()).rejects.toThrow("Failed to fetch Pokemon data");
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BASE_API_URL}/pokemon?limit=1300`
    );
  });
});
