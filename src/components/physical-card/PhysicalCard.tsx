import { Ruler, Weight, Zap } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardWrapper from "../card-wrapper/CardWrapper";

interface PhysicalCardProps {
  weight: number;
  height: number;
  baseExperience: number;
}

function PhysicalCard({ weight, height, baseExperience }: PhysicalCardProps) {
  return (
    <CardWrapper header={"Physical Attributes"}>
      <div className="flex justify-between">
        <p className="px-4 py-2 flex  items-center justify-center text-gray-600 font-bold bg-white rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Ruler size={18} />
            {`${height} M`}
          </span>
        </p>
        <p className="px-4 py-2 flex  items-center justify-center  text-gray-600 font-bold bg-white rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Weight size={18} />
            {`${weight} Kg`}
          </span>
        </p>
        <p className="px-4 py-2 flex  items-center justify-center  text-gray-600 font-bold bg-white rounded-lg">
          <span className="text-sm flex items-center gap-2">
            <Zap size={18} />
            {`${baseExperience} Xp`}
          </span>
        </p>
      </div>
    </CardWrapper>
  );
}

export default PhysicalCard;
