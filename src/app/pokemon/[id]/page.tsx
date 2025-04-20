"use client";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import PokemonDetails from "@/sections/pokemon-details/PokemonDetails";
import { Ruler, Weight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
  params: {
    id: string;
  };
}
function page({ params }: Props) {
  const { id } = params;
  if (!id) {
    return <h2>Error</h2>;
  }

  return <PokemonDetails id={Number(id)} />;
}

export default page;
