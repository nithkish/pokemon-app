import { PokemonDetails } from "./pokemon";

export interface Favourites {
  favourites: number[];
}

export interface FavouriteContextType extends Favourites {
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
  favouritesListDetails: PokemonDetails[];
  error: string | null;
  loading: boolean;
}
