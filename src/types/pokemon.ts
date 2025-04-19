export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonAPIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export interface PokemonList {
  [key: number]: Pokemon[];
}

export type PokemonDetails = {
  name: string;
  sprites: {
    front_default: string;
  };
};
