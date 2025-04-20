import { PokemonAPIResponse, PokemonDetails, Type } from "@/types/pokemon";

export const mockPokemonDetails: PokemonDetails = {
  id: 1,
  name: "bulbasaur",
  abilities: [
    { ability: { name: "overgrow" } },
    { ability: { name: "chlorophyll" } },
  ],
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  height: 7,
  weight: 69,
  base_experience: 64,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      },
    },
  },
  stats: [
    { base_stat: 45, stat: { name: "hp" } },
    { base_stat: 49, stat: { name: "attack" } },
    { base_stat: 49, stat: { name: "defense" } },
    { base_stat: 65, stat: { name: "special-attack" } },
    { base_stat: 65, stat: { name: "special-defense" } },
    { base_stat: 45, stat: { name: "speed" } },
  ],
};

export const mockTypes: Type[] = [
  { type: { name: "fire" } },
  { type: { name: "water" } },
  { type: { name: "grass" } },
];

export const mockPokemonAPIResponse: PokemonAPIResponse = {
  results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
  count: 100,
  next: "",
  previous: "",
};
