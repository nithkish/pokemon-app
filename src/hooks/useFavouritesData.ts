import { getPokemonsById } from "@/actions/get-pokemons-by-id";
import { Favourites } from "@/types/favourites";
import { PokemonDetails } from "@/types/pokemon";
import axios from "axios";
import { useState } from "react";

/**
 * Custom hook to manage and fetch details of favourite Pokémon.
 *
 * This hook provides functionality to fetch Pokémon details based on a list of favourite Pokémon IDs
 * or a single Pokémon ID. It also manages the loading state, error state, and the list of fetched Pokémon details.
 *
 * @returns An object containing:
 * - `favouritesListDetails`: An array of fetched Pokémon details.
 * - `loading`: A boolean indicating whether a fetch operation is in progress.
 * - `error`: A string containing an error message, if any occurred during the fetch operation.
 * - `fetchPokemonDetails`: A function to fetch details of multiple Pokémon based on a list of favourite IDs.
 * - `fetchPokemonDetailsById`: A function to fetch details of a single Pokémon by its ID.
 */
export const useFavouritesData = () => {
  const [favouritesListDetails, setFavouritesListDetails] = useState<
    PokemonDetails[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches the details of Pokémon based on the provided list of favourite Pokémon IDs.
   *
   * @param favourites - An object containing a list of favourite Pokémon IDs.
   * @throws Will set an error message if the API call fails. If the error is an Axios error,
   *         it will use the response message; otherwise, it will set a generic error message.
   * @returns This function does not return a value directly. Instead, it updates the state
   *          with the fetched Pokémon details or an error message.
   *
   */
  const fetchPokemonDetails = async (favourites: Favourites) => {
    setLoading(true);
    try {
      setError(null);
      const details = await Promise.all(
        favourites.favourites.map(async (id) => {
          const res = await getPokemonsById(id);
          return res;
        })
      );
      setFavouritesListDetails(details as PokemonDetails[]);
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
   * Fetches the details of a Pokémon by its ID and updates the favourites list with the retrieved data.
   *
   * @param id - The unique identifier of the Pokémon to fetch details for.
   *
   * @remarks
   * This function sets the loading state to `true` while the data is being fetched and resets it to `false` once the operation is complete.
   * If an error occurs during the fetch operation, it sets an appropriate error message.
   *
   * @throws Will set an error message if the fetch operation fails due to an Axios error or any other unexpected error.
   *
   */
  const fetchPokemonDetailsById = async (id: number) => {
    setLoading(true);
    try {
      setError(null);
      const res = await getPokemonsById(id);
      setFavouritesListDetails((prev) => [...prev, res as PokemonDetails]);
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

  return {
    favouritesListDetails,
    loading,
    error,
    fetchPokemonDetailsById,
    fetchPokemonDetails,
  };
};
