import { Stats } from "@/types/pokemon";
import React from "react";
import CardWrapper from "../card-wrapper/CardWrapper";
import { Progress } from "../ui/progress";

/**
 * This component renders a card displaying the base statistics of a Pokémon.
 * It uses a `CardWrapper` component to provide a styled container and a `Progress` component
 * to visually represent the value of each statistic.
 *
 * Props:
 * - `stats`: An array of objects representing the Pokémon's base stats. Each object should
 *   have the following structure:
 *   - `stat`: An object containing the name of the stat (e.g., "hp", "attack").
 *   - `base_stat`: A number representing the value of the stat.
 *
 * If the `stats` array is empty or not provided, the component displays a message indicating
 * that no stats are available.
 * ```
 */
interface BaseStatsCardProps {
  stats: Stats[];
}

function BaseStatsCard({ stats }: BaseStatsCardProps) {
  if (!stats || stats.length === 0) {
    return (
      <CardWrapper header={"Base Statistics"}>
        <div className="flex flex-col gap-2">
          <p>No stats available</p>
        </div>
      </CardWrapper>
    );
  }
  return (
    <CardWrapper header={"Base Statistics"}>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-4">
          {stats.map((stat: any, index: number) => (
            <li key={index} className="flex flex-col gap-1">
              <span className="capitalize">{stat.stat.name}</span>
              <div className="flex items-center gap-4">
                <Progress value={stat.base_stat} />
                <span className="font-bold">{stat.base_stat}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}

export default BaseStatsCard;
