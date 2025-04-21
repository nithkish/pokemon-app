import Favourites from "@/sections/favourites/Favourites";
import React from "react";

// Component renders the Favourites section
// Acts as the base component for route /favourites
// Open for extension not for modification
function page() {
  return <Favourites />;
}

export default page;
