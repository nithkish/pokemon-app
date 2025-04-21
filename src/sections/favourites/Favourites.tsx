"use client";
import ErrorScreen from "@/components/error-screen/ErrorScreen";
import ListSkeleton from "@/components/list-skeleton/ListSkeleton";
import NoFavourites from "@/components/no-favourites/NoFavourites";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";
import { Heart } from "lucide-react";
import React from "react";

/**
 * The `Favourites` component used for displaying the favourites section,
 * is responsible for rendering the user's favorite Pokémon.
 * It utilizes the `useFavouritesContext` hook to access the list of favorite Pokémon,
 * their details, and the loading/error states.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component displaying the favorite Pokémon or
 * appropriate fallback UI based on the state.
 *
 * @remarks
 * - Displays a loading skeleton (`ListSkeleton`) while data is being fetched.
 * - Shows an error screen (`ErrorScreen`) if there is an error during data fetching.
 * - Renders a `NoFavourites` component if the user has no favorite Pokémon.
 * - Displays a grid of `PokemonCard` components for each favorite Pokémon.
 *
 * @hook
 * - `useFavouritesContext`: Provides access to the `favouritesListDetails`, `error`,
 *   `loading`, and `favourites` states.
 *
 * @dependencies
 * - `ListSkeleton`: A component to show a loading state.
 * - `ErrorScreen`: A component to display an error message.
 * - `NoFavourites`: A component to indicate no favorite Pokémon are available.
 * - `PokemonCard`: A component to display individual Pokémon details.
 */
function Favourites() {
  const { favouritesListDetails, error, loading, favourites } =
    useFavouritesContext();

  if (loading) {
    return <ListSkeleton />;
  }
  if (error) return <ErrorScreen />;

  if (favourites?.length == 0) return <NoFavourites />;

  return (
    <section className="min-h-[90vh] p-5 md:px-16 md:py-2">
      <div className="flex gap-4 mb-4 md:mb-8">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          Favourites List
        </h1>
        <Heart className="text-red-500 h-9 w-9 fill-current" />
      </div>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {!loading &&
          favouritesListDetails
            .filter((list) => favourites.indexOf(list.id) > -1)
            .map((pokemon: any, index: number) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
      </div>
    </section>
  );
}

export default Favourites;
