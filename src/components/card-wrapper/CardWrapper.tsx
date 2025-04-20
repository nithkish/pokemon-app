import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardWrapperProps {
  header?: string;
  children: ReactNode;
}
function CardWrapper({ header, children }: CardWrapperProps) {
  return (
    <Card>
      {header && (
        <CardHeader>
          <CardTitle className="text-xl capitalize" aria-label={header}>
            {header}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CardWrapper;
