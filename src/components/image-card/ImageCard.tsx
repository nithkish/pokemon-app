import Image from "next/image";
import React, { useEffect, useState } from "react";
import CardWrapper from "../card-wrapper/CardWrapper";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";

interface ImageCardProps {
  src: string;
  name: string;
  id: number;
}

/**
 * ImageCard Component
 *
 * This component renders a card displaying an image, a name, and a button to toggle the "favourite" status.
 * It uses the `useFavouritesContext` to manage the favourite state of the item.
 *
 * @component
 * @param {ImageCardProps} props - The props for the ImageCard component.
 * @param {string} props.src - The source URL of the image to be displayed.
 * @param {string} props.name - The name of the item to be displayed.
 * @param {number} props.id - The unique identifier for the item.
 *
 * @returns {JSX.Element} A card component displaying an image, name, and a favourite toggle button.
 *
 */
function ImageCard({ src, name, id }: ImageCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addFavourite, removeFavourite } = useFavouritesContext();

  useEffect(() => {
    setIsFavourite(favourites.indexOf(id) > -1);
  }, [favourites]);

  const handleFavouriteClick = () => {
    isFavourite ? removeFavourite(id) : addFavourite(id);
  };

  return (
    <CardWrapper>
      <div className="py-5 flex justify-between">
        <div className="font-semibold tracking-tight text-3xl capitalize">
          {name}
        </div>

        <div>
          <Heart
            className={`text-red-500 h-10 w-10 cursor-pointer ${
              isFavourite ? "fill-current" : ""
            }`}
            onClick={handleFavouriteClick}
            aria-label="Add to Favourites Button"
          />
          {/* This span is visually hidden but provides an accessible label for screen readers */}
          {/* The "sr-only" class hides the text visually but keeps it accessible */}
          <span className="sr-only">Favourites Button</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={src}
          alt="pokemon image"
          width={400}
          height={400}
          className="relative z-10 filter drop-shadow-lg"
        />
      </div>
    </CardWrapper>
  );
}

export default ImageCard;
