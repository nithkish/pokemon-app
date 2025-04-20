import { getPokemons } from "@/actions/get-pokemons";
import { ITEMS_PER_PAGE } from "@/constants/api";
import { Pokemon, PokemonDetails, PokemonList } from "@/types/pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonData = (currentPage: number) => {
  const [pokemonList, setPokemonList] = useState<PokemonList>({});
  const [pokemonListDetails, setPokemonListDetails] = useState<
    PokemonDetails[]
  >([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [maxPage, setMaxPage] = useState<number>(20);

  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPokemons(currentPage);
      if (!response) {
        throw new Error("Failed to fetch Pokemon list");
      }
      setPokemonList((prev) => ({ ...prev, [currentPage]: response.results }));
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

  const fetchAllPokemons = async () => {
    try {
      setError(null);
      const response = await getPokemons();
      if (!response) {
        throw new Error("Failed to fetch All Pokemons");
      }
      setAllPokemons(response.results);
      setMaxPage(Math.ceil(response.count / ITEMS_PER_PAGE));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  // fetch details during home screen load to get access to images
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

      setLoading(false);

      setPokemonListDetails(details);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage]);

  useEffect(() => {
    if (pokemonList[currentPage]?.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemonList]);

  return {
    pokemonList,
    pokemonListDetails,
    setPokemonListDetails,
    allPokemons,
    loading,
    error,
    maxPage,
  };
};
