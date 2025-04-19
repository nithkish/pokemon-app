import { BASE_API_URL, ITEMS_PER_PAGE } from "@/constants/api";
import { PokemonAPIResponse } from "@/types/pokemon";
import axios from "axios";

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
    console.log(e);
  }
};
