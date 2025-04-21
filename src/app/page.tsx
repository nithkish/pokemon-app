"use client";

import PokemonList from "@/sections/pokemon-list/PokemonList";

/**
 * Home page component.
 *
 * This is the main entry point for the application and serves as the home page.
 * It renders the `PokemonList` component, which is responsible for displaying
 * a list of Pokémon.
 * Open for extension not for modification
 *
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  return <PokemonList />;
}
