import { getPokemons } from "@/actions/get-pokemons";
import { ITEMS_PER_PAGE } from "@/constants/api";
import { Pokemon, PokemonDetails, PokemonList } from "@/types/pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage and fetch Pokémon data.
 *
 * @param {number} currentPage - The current page number for paginated Pokémon data.
 * @returns {Object} An object containing the following properties and methods:
 * - `pokemonList`: A dictionary of Pokémon lists indexed by page number.
 * - `pokemonListDetails`: An array of detailed Pokémon data for the current page.
 * - `setPokemonListDetails`: A setter function to update the Pokémon details list.
 * - `loading`: A boolean indicating whether data is currently being loaded.
 * - `error`: A string or null representing any error message encountered during data fetching.
 * - `maxPage`: The maximum number of pages available for pagination.
 *
 * @description
 * This hook provides functionality to fetch and manage Pokémon data, including:
 * - Fetching a paginated list of Pokémon.
 * - Fetching details for Pokémon on the current page.
 * - Fetching all Pokémon data for global access.
 *
 * It also handles loading and error states for better user experience.
 *
 */
export const usePokemonData = (currentPage: number) => {
  const [pokemonList, setPokemonList] = useState<PokemonList>({});
  const [pokemonListDetails, setPokemonListDetails] = useState<
    PokemonDetails[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [maxPage, setMaxPage] = useState<number>();

  /**
   * Fetches a list of Pokémon for the current page and updates the state with the results.
   *
   * This function handles the asynchronous operation of fetching Pokémon data from an API.
   * It manages loading and error states, and updates the Pokémon list state with the fetched data.
   *
   * @async
   * @function
   * @throws {Error} Throws an error if the response is invalid or if an unexpected error occurs.
   *
   * @remarks
   * - Uses `setLoading` to indicate the loading state during the fetch operation.
   * - Uses `setError` to capture and display any errors that occur during the fetch.
   * - Updates the Pokémon list state with the fetched results, keyed by the current page.
   * - Handles both Axios-specific errors and generic errors.
   *
   */
  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPokemons(currentPage);
      if (!response) {
        throw new Error("Failed to fetch Pokemon list");
      }
      setPokemonList((prev) => ({ ...prev, [currentPage]: response.results }));
      if (!maxPage) setMaxPage(Math.ceil(response.count / ITEMS_PER_PAGE));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetches detailed information for the current page of Pokémon.
   *
   * This function retrieves Pokémon details by making API calls for each Pokémon
   * in the current page's list. It handles loading state, error state, and updates
   * the Pokémon details list upon successful retrieval.
   *
   * @async
   * @function
   * @throws Will set an error message if the API call fails or an unexpected error occurs.
   *
   * @remarks
   * - Uses `axios` for making HTTP requests.
   * - Handles both Axios-specific errors and generic errors.
   *
   */
  const fetchPokemonDetails = async () => {
    setLoading(true);
    try {
      setError(null);
      const details = await Promise.all(
        pokemonList[currentPage].map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      setPokemonListDetails(details);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // fetch pokemon list on page number change
  useEffect(() => {
    fetchPokemonList();
  }, [currentPage]);

  // fetch pokemon details for getting images and other details
  useEffect(() => {
    if (pokemonList[currentPage]?.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemonList]);

  return {
    pokemonList,
    pokemonListDetails,
    setPokemonListDetails,
    loading,
    error,
    maxPage,
  };
};
