import { BASE_API_URL } from "@/constants/api";
import { Favourites } from "@/types/favourites";
import { PokemonDetails } from "@/types/pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const useFavouritesData = (favourites: Favourites) => {
  const [favouritesListDetails, setFavouritesListDetails] = useState<
    PokemonDetails[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonDetails = async () => {
    setLoading(true);
    try {
      setError(null);
      const details = await Promise.all(
        favourites.favourites.map(async (id) => {
          const res = await axios.get(`${BASE_API_URL}/pokemon/${id}`);
          return res.data;
        })
      );
      setFavouritesListDetails(details);
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    if (favourites.favourites && favourites.favourites.length > 0) {
      fetchPokemonDetails();
    } else {
      setFavouritesListDetails([]);
    }
  }, [favourites]);

  return {
    favouritesListDetails,
    loading,
    error,
  };
};
