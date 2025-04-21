import Image from "next/image";
import React from "react";

/**
 * A React functional component that displays a message and an image
 * when there are no favorite Pokémon selected by the user.
 *
 * @component
 * @returns {JSX.Element} A styled container with a message and an image.
 *
 */
function NoFavourites() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[50vh] text-center">
      <Image
        src={"/pikachu.png"}
        alt="Sad Pikachu Logo"
        width={200}
        height={200}
      />
      <div className="text-2xl">
        No favourites yet! Please add your favourite Pokemons!
      </div>
    </div>
  );
}

export default NoFavourites;
