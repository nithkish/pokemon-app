"use client";
import ErrorScreen from "@/components/error-screen/ErrorScreen";
import { ListSkeleton } from "@/components/list-skeleton/ListSkeleton";
import NoFavourites from "@/components/no-favourites/NoFavourites";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";
import React from "react";

function Favourites() {
  const { favouritesListDetails, error, loading } = useFavouritesContext();

  if (loading) {
    return <ListSkeleton />;
  }
  if (error) return <ErrorScreen />;

  if (favouritesListDetails?.length == 0) return <NoFavourites />;

  return (
    <section className="min-h-[91vh]">
      <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!loading &&
          favouritesListDetails.map((pokemon: any, index: number) => {
            return <PokemonCard key={index} pokemon={pokemon} />;
          })}
      </div>
    </section>
  );
}

export default Favourites;
