import { Stats } from "@/types/pokemon";
import React from "react";
import CardWrapper from "../card-wrapper/CardWrapper";
import { Progress } from "../ui/progress";

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
