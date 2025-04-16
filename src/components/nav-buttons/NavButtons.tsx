import { HomeIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleTheme from "../toggle-theme/ToggleTheme";

async function NavButtons() {
  // Define an array of navigation buttons with their properties
  // This array can be easily extended to add more buttons in the future
  // Each button has a name, icon, and href (link)
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
    // Render the navigation buttons
    // Each button is created using the Button component
    <div className="flex items-center space-x-4">
      {navButtons.map((button) => (
        <Button
          key={button.name}
          variant="destructive"
          className="flex items-center gap-2"
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
