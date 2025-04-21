import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardWrapperProps {
  header?: string;
  children: ReactNode;
}

/**
 * Card Wrapper Component
 *
 * A reusable wrapper component for displaying content inside a styled card.
 * It optionally includes a header with a title and renders children content
 * within the card body.
 *
 *
 * @prop {string} [header] - An optional header title to display at the top of the card.
 * @prop {ReactNode} children - The content to be rendered inside the card.
 *
 * @example
 * ```tsx
 * <CardWrapper header="My Card Title">
 *   <p>This is the content inside the card.</p>
 * </CardWrapper>
 * ```
 */
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
