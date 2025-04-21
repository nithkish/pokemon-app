import { Pokemon, PokemonDetails } from "./pokemon";

/**
 * Represents the global context type for the application.
 */
export interface GlobalContextType {
  /**
   * The current page number in the application.
   */
  currentPage: number;

  /**
   * Function to update the current page number.
   */
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

  /**
   * A mapping of page numbers to arrays of Pokemon objects.
   */
  pokemonList: { [key: number]: Pokemon[] };

  /**
   * A list of detailed information about Pokemon.
   */
  pokemonListDetails: PokemonDetails[];

  /**
   * Indicates whether the application is currently loading data.
   */
  loading: boolean;

  /**
   * Represents any error message encountered during data fetching or processing.
   * If no error exists, this will be `null`.
   */
  error: string | null;

  /**
   * The maximum number of pages available.
   * If undefined, the maximum page count is not yet determined.
   */
  maxPage: number | undefined;

  /**
   * Function to update the list of Pokemon details.
   */
  setPokemonListDetails: React.Dispatch<React.SetStateAction<PokemonDetails[]>>;
}
