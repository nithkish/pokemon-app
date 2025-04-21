import { BASE_API_URL, ITEMS_PER_PAGE } from "@/constants/api";
import { PokemonAPIResponse } from "@/types/pokemon";
import axios from "axios";

/**
 * Fetches a list of Pokémon from the API.
 *
 * This function retrieves Pokémon data from the specified API endpoint.
 * By default, it fetches all Pokémon with a limit of 1300. If a page number
 * is provided, it calculates the offset and fetches a paginated list of Pokémon
 * based on the `ITEMS_PER_PAGE` constant.
 *
 * @param page - Optional page number for paginated results. If not provided, all Pokémon are fetched.
 * @returns A promise that resolves to a `PokemonAPIResponse` containing the Pokémon data.
 * @throws An error if the API request fails.
 */
export const getPokemons = async (page?: number) => {
  let url = `${BASE_API_URL}/pokemon?limit=1300`;
  if (page) {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    url = `${BASE_API_URL}/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`;
  }
  try {
    const { data } = await axios.get(url);
    return data as PokemonAPIResponse;
  } catch (e) {
    throw new Error("Failed to fetch Pokemon data");
  }
};
