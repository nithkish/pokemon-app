import { getPokemonsById } from "@/actions/get-pokemons-by-id";
import axios from "axios";
import { mockPokemonDetails } from "../../__mockdata__/pokemon";
import { BASE_API_URL } from "@/constants/api";

jest.mock("axios");

describe("getPokemonsById Action", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it("should fetch Pokémon details by ID", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetails });

    const result = await getPokemonsById(1);

    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/pokemon/1/`);
    expect(result).toEqual(mockPokemonDetails);
  });

  it("should throw an error if the API request fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(getPokemonsById(1)).rejects.toThrow(
      "Failed to fetch Pokemon data"
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/pokemon/1/`);
  });
});
