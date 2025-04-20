import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { Ruler, Weight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PhysicalCard from "@/components/physical-card/PhysicalCard";
import BaseStatsCard from "@/components/base-stats-card/BaseStatsCard";
import AbilitiesCard from "@/components/abilities-card/AbilitiesCard";
import TypesCard from "@/components/types-card/TypesCard";
import ImageCard from "@/components/image-card/ImageCard";
import ErrorScreen from "@/components/error-screen/ErrorScreen";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";

interface PokemonDetailsProps {
  id: number;
}

function PokemonDetails({ id }: PokemonDetailsProps) {
  const { pokemonListDetails } = useGlobalContext();
  const { favouritesListDetails } = useFavouritesContext();

  const pokemonDetails = [
    ...pokemonListDetails,
    ...favouritesListDetails,
  ]?.find((pokemon) => pokemon.id === Number(id));

  if (!pokemonDetails) {
    return <ErrorScreen />;
  }

  return (
    <main>
      <section className="p-5 min-h-[60vh]  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative flex flex-col gap-4">
          <ImageCard
            src={pokemonDetails.sprites.other.home.front_default}
            name={pokemonDetails.name}
            id={pokemonDetails.id}
          />
          <PhysicalCard
            weight={pokemonDetails.weight}
            height={pokemonDetails.height}
            baseExperience={pokemonDetails.base_experience}
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <BaseStatsCard stats={pokemonDetails.stats} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <AbilitiesCard abilities={pokemonDetails.abilities} />
            <TypesCard types={pokemonDetails.types} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PokemonDetails;
