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
import { uniqBy } from "lodash";

interface PokemonDetailsProps {
  id: number;
}

/**
 * Component to display detailed information about a specific Pokémon.
 *
 * @component
 * @param {PokemonDetailsProps} props - The props for the component.
 * @param {string | number} props.id - The ID of the Pokémon to display details for.
 *
 * @returns {JSX.Element} The rendered Pokémon details component.
 *
 * @description
 * This component fetches the Pokémon details by combining the `pokemonListDetails`
 * and `favouritesListDetails` from the global and favourites contexts, respectively.
 * It ensures uniqueness of Pokémon by their `id` and finds the specific Pokémon
 * matching the provided `id`. If no Pokémon is found, it renders an `ErrorScreen`.
 *
 * The component displays the following details about the Pokémon:
 * - An image card with the Pokémon's sprite, name, and ID.
 * - Physical attributes such as weight, height, and base experience.
 * - Base stats, abilities, and types.
 *
 *
 * @requires useGlobalContext - To access the global Pokémon list details.
 * @requires useFavouritesContext - To access the favourites Pokémon list details.
 * @requires uniqBy - To ensure uniqueness of Pokémon by their `id`.
 * @requires ErrorScreen - To display an error screen if no Pokémon is found.
 * @requires ImageCard - To display the Pokémon's image and basic details.
 * @requires PhysicalCard - To display the Pokémon's physical attributes.
 * @requires BaseStatsCard - To display the Pokémon's base stats.
 * @requires AbilitiesCard - To display the Pokémon's abilities.
 * @requires TypesCard - To display the Pokémon's types.
 */
function PokemonDetails({ id }: PokemonDetailsProps) {
  const { pokemonListDetails } = useGlobalContext();
  const { favouritesListDetails } = useFavouritesContext();

  const pokemonDetails = uniqBy(
    [...pokemonListDetails, ...favouritesListDetails],
    "id"
  )?.find((pokemon) => pokemon.id === Number(id));

  if (!pokemonDetails) {
    return <ErrorScreen />;
  }

  return (
    <main className="p-5 md:p-0 flex flex-col justify-start gap-4 min-h-[90vh]">
      <section>
        <div className=" md:p-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" flex flex-col  gap-4">
            <ImageCard
              src={pokemonDetails.sprites.other.home.front_default}
              name={pokemonDetails.name}
              id={pokemonDetails.id}
            />
            <TypesCard types={pokemonDetails.types} />
          </div>
          <div className="flex flex-col gap-4">
            <BaseStatsCard stats={pokemonDetails.stats} />
            <AbilitiesCard abilities={pokemonDetails.abilities} />
          </div>
        </div>
        <div className="py-4 md:p-2">
          <PhysicalCard
            weight={pokemonDetails.weight}
            height={pokemonDetails.height}
            baseExperience={pokemonDetails.base_experience}
          />
        </div>
      </section>
    </main>
  );
}

export default PokemonDetails;
