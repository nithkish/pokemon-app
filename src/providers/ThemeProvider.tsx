"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * A custom ThemeProvider component that wraps the `NextThemesProvider` from the `next-themes` library.
 * This component allows you to provide theme-related context to your application.
 *
 * @param children - The child components that will have access to the theme context.
 * @param props - Additional props that are passed to the `NextThemesProvider`.
 *
 * @returns A React component that provides theme context to its children.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
