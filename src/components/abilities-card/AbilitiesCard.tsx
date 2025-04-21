import React from "react";
import CardWrapper from "../card-wrapper/CardWrapper";
import { Ability } from "@/types/pokemon";

/**
 * Props for the AbilitiesCard component.
 *
 * @interface AbilitiesCardProps
 * @property {Ability[]} abilities - An array of Pokémon abilities to be displayed.
 */
interface AbilitiesCardProps {
  abilities: Ability[];
}

/**
 * Abilities Card Component
 *
 * @param {AbilitiesCardProps} props - The props for the component.
 * @param {Ability[]} props.abilities - An array of Pokémon abilities to be displayed.
 * @returns {JSX.Element} A styled card displaying the Pokémon abilities.
 *
 */
function AbilitiesCard({ abilities }: AbilitiesCardProps) {
  return (
    <CardWrapper header={"Abilities"}>
      <div className="flex flex-col gap-2">
        <ul className="flex gap-2">
          {abilities.map((ability: any, index: number) => (
            <li
              key={index}
              className="px-4 py-2 flex items-center gap-2 text-sm font-bold bg-white text-[#54a0ff] rounded-full"
            >
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}

export default AbilitiesCard;
