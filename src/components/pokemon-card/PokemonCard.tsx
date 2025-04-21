"use client";
import { PokemonDetails } from "@/types/pokemon";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

/**
 * A React component that displays a card for a Pokémon with its image and name.
 * Clicking on the card navigates to the Pokémon's details page.
 *
 * @component
 * @param {PokemonCardProps} props - The props for the component.
 * @param {PokemonDetails} props.pokemon - The details of the Pokémon to display.
 *
 *
 * @returns {JSX.Element} A card component displaying the Pokémon's image and name.
 */
function PokemonCard({ pokemon }: PokemonCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon?.id}`);
  };

  return (
    <Card
      className="bg-indigo-600 dark:bg-slate-950 hover:bg-indigo-500 hover:dark:bg-slate-900 shadow-sm cursor-pointer"
      onClick={handleClick}
      data-testid={"pokemon-card"}
      aria-label={pokemon?.name}
    >
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={
              pokemon?.sprites?.other?.home?.front_default || "/pokeball.png"
            }
            alt="pokemon image"
            width={150}
            height={150}
          />
        </div>
        <h2 className="text-2xl text-gray-200 capitalize font-bold text-center">
          {pokemon?.name}
        </h2>
      </CardContent>
    </Card>
  );
}

export default PokemonCard;
