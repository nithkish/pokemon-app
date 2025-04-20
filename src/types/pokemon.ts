export interface Pokemon extends NameString {
  url: string;
}

export interface NameString {
  name: string;
}

export type PokemonAPIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export interface PokemonList {
  [key: number]: Pokemon[];
}

export type Stats = {
  base_stat: number;
  stat: NameString;
};

export type Ability = {
  ability: NameString;
};

export type Type = { type: NameString };

export type PokemonDetails = {
  id: number;
  name: string;
  abilities: Ability[];
  types: Type[];
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
  stats: Stats[];
};
