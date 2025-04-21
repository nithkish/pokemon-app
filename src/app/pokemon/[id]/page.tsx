"use client";
import ErrorScreen from "@/components/error-screen/ErrorScreen";
import PokemonDetails from "@/sections/pokemon-details/PokemonDetails";
import React from "react";

/**
 * Props interface for the Pokemon detail page.
 *
 * @interface Props
 * @property {Object} params - An object containing route parameters.
 * @property {string} params.id - The unique identifier for a specific Pokemon, extracted from the route.
 */
interface Props {
  params: {
    id: string;
  };
}

/**
 * React component for rendering the Pokemon detail page.
 *
 * Base component for route /pokemon/{id}
 * This component extracts the `id` parameter from the route and uses it to
 * display detailed information about a specific Pokemon. If the `id` is not
 * provided or invalid, an error screen is displayed instead.
 *
 * @component
 * @param {Props} props - The props object containing route parameters.
 * @param {Object} props.params - An object containing route parameters.
 * @param {string} props.params.id - The unique identifier for a specific Pokemon, extracted from the route.
 * @returns {JSX.Element} The rendered Pokemon detail page or an error screen.
 */
function page({ params }: Props) {
  const { id } = params;
  if (!id) {
    return <ErrorScreen />;
  }

  return <PokemonDetails id={Number(id)} />;
}

export default page;
