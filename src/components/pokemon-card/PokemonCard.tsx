"use client";
import { PokemonDetails } from "@/types/pokemon";
import Image from "next/image";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

// This component is used to display the pokemon card
// It takes the pokemon details as props and displays the image and name of the pokemon
// It also handles the click event to navigate to the pokemon details page
function PokemonCard({ pokemon }: PokemonCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon?.id}`);
  };

  return (
    <Card
      className="bg-zinc-950 dark:bg-white"
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
        <h2 className="text-2xl text-white dark:text-gray-800 capitalize font-bold text-center">
          {pokemon?.name}
        </h2>
      </CardContent>
    </Card>
  );
}

export default PokemonCard;
