"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ToggleTheme() {
  // This component is a button that toggles between light and dark themes
  // It uses the useTheme hook from next-themes to manage the theme state
  const { theme, setTheme } = useTheme();

  return (
    // This button changes its icon based on the current theme
    // It uses the SunIcon for light mode and MoonIcon for dark mode
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Light/Dark mode button"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {/* This span is visually hidden but provides an accessible label for screen readers */}
      {/* The "sr-only" class hides the text visually but keeps it accessible */}
      <span className="sr-only">Toggle Dark/Light theme</span>
    </Button>
  );
}
