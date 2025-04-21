import { BASE_API_URL } from "@/constants/api";
import { PokemonDetails } from "@/types/pokemon";
import axios from "axios";

/**
 * Fetches the details of a Pokémon by its ID from the API.
 *
 * @param id - The unique identifier of the Pokémon to fetch.
 * @returns A promise that resolves to the Pokémon details as a `PokemonDetails` object.
 * @throws throws an error if the API request fails.
 *
 * @remarks
 * This function uses the `axios` library to make a GET request to the Pokémon API.
 * Ensure that the `BASE_API_URL` constant is correctly set to the base URL of the API.
 *
 * @example
 * ```typescript
 * const pokemonDetails = await getPokemonsById(1);
 * console.log(pokemonDetails.name); // Outputs the name of the Pokémon with ID 1
 * ```
 */
export const getPokemonsById = async (id: number) => {
  let url = `${BASE_API_URL}/pokemon/${id}/`;
  try {
    const { data } = await axios.get(url);
    return data as PokemonDetails;
  } catch (e) {
    throw new Error("Failed to fetch Pokemon data");
  }
};
