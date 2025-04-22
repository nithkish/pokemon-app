import { Ruler, Weight, Zap } from "lucide-react";
import React from "react";
import CardWrapper from "../card-wrapper/CardWrapper";

interface PhysicalCardProps {
  weight: number;
  height: number;
  baseExperience: number;
}

/**
 * A React functional component that displays the physical attributes of a Pokémon,
 * including its weight, height, and base experience. The component uses a card layout
 * with icons and labels for each attribute.
 *
 * @component
 * @param {PhysicalCardProps} props - The properties for the PhysicalCard component.
 * @param {number} props.weight - The weight of the Pokémon in kilograms.
 * @param {number} props.height - The height of the Pokémon in meters.
 * @param {number} props.baseExperience - The base experience points of the Pokémon.
 *
 * @returns {JSX.Element} A styled card component displaying the Pokémon's physical attributes.
 *
 */
function PhysicalCard({ weight, height, baseExperience }: PhysicalCardProps) {
  return (
    <CardWrapper header={"Physical Attributes"}>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="px-4 py-2 flex  items-center justify-center text-gray-600 dark:text-white font-bold border-2  rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Ruler size={18} />
            {`Height : ${height} ft`}
          </span>
        </p>
        <p className="px-4 py-2 flex  items-center justify-center  text-gray-600 dark:text-white font-bold border-2 rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Weight size={18} />
            {`Weight : ${weight} lbs`}
          </span>
        </p>
        <p className="px-4 py-2 flex  items-center justify-center  text-gray-600 dark:text-white font-bold border-2 rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Zap size={18} />
            {`Base Exp : ${baseExperience} xp`}
          </span>
        </p>
      </div>
    </CardWrapper>
  );
}

export default PhysicalCard;
