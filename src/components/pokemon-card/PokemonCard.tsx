"use client";
import { PokemonDetails } from "@/types/pokemon";
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

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Card className="bg-zinc-950 dark:bg-white">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={pokemon?.sprites?.front_default}
            alt="pokemon image"
            width={150}
            height={150}
            className="margin-auto"
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
