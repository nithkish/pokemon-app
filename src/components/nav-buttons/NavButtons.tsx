import { HomeIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleTheme from "@/components/toggle-theme/ToggleTheme";

/**
 * @description A functional React component that renders a set of navigation buttons and a theme toggle button.
 * The navigation buttons are dynamically generated from a predefined array of button configurations.
 *
 * @returns {JSX.Element} A JSX element containing navigation buttons and a theme toggle button.
 *
 */
function NavButtons() {
  // Define an array of navigation buttons with their properties
  // This array can be easily extended to add more buttons in the future
  // Each button has a name, icon, and href (link)
  // Can be moved to a central config file for scalability
  const navButtons = [
    {
      name: "Home",
      icon: <HomeIcon className="w-4 h-4" />,
      href: "/",
    },
    {
      name: "Favourites",
      icon: <Heart className="w-4 h-4" />,
      href: "/favourites",
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      {navButtons.map((button) => (
        <Button
          variant="outline"
          key={button.name}
          className="flex items-center gap-2 bg-indigo-600 text-gray-100 hover:text-gray-50 hover:bg-indigo-500 dark:bg-slate-900 dark:hover:bg-slate-800"
          asChild
        >
          <Link href={button.href}>
            {button.icon}
            <span className="hidden lg:inline">{button.name}</span>
          </Link>
        </Button>
      ))}
      <ToggleTheme />
    </div>
  );
}
export default NavButtons;
