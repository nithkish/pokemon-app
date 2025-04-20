import { Pokemon, PokemonDetails } from "./pokemon";

export interface GlobalContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pokemonList: { [key: number]: Pokemon[] };
  pokemonListDetails: PokemonDetails[];
  allPokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  maxPage: number;
  setPokemonListDetails: React.Dispatch<React.SetStateAction<PokemonDetails[]>>;
  // activePokemon: PokemonDetails | undefined;
  // setActivePokemon: React.Dispatch<
  //   React.SetStateAction<PokemonDetails | undefined>
  // >;
}
