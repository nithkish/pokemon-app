import React from "react";
import CardWrapper from "../card-wrapper/CardWrapper";
import { Type } from "@/types/pokemon";

interface TypesCardPorps {
  types: Type[];
}

function TypesCard({ types }: TypesCardPorps) {
  return (
    <CardWrapper header={"Types"}>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-wrap gap-2">
          {types.map((type: any, index: number) => (
            <li
              key={index}
              className="px-4 py-2 flex items-center gap-2 text-sm font-bold bg-zinc-700 text-white rounded-full"
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}

export default TypesCard;
