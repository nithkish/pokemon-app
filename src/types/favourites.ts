import { PokemonDetails } from "./pokemon";

/**
 * Represents a collection of favourite items.
 *
 * @interface Favourites
 * @property {number[]} favourites - An array of numeric identifiers representing the user's favourite items.
 */
export interface Favourites {
  favourites: number[];
}

/**
 * Represents the context type for managing favourite Pokémon in the application.
 * Extends the `Favourites` interface to include additional methods and properties
 * for handling favourites functionality.
 */
export interface FavouriteContextType extends Favourites {
  /**
   * Adds a Pokémon to the favourites list by its ID.
   * @param id - The unique identifier of the Pokémon to be added to favourites.
   */
  addFavourite: (id: number) => void;

  /**
   * Removes a Pokémon from the favourites list by its ID.
   * @param id - The unique identifier of the Pokémon to be removed from favourites.
   */
  removeFavourite: (id: number) => void;

  /**
   * A list containing detailed information about the Pokémon in the favourites list.
   */
  favouritesListDetails: PokemonDetails[];

  /**
   * Represents any error that occurred while managing favourites.
   * If no error exists, this will be `null`.
   */
  error: string | null;

  /**
   * Indicates whether a loading operation is in progress for managing favourites.
   */
  loading: boolean;
}
