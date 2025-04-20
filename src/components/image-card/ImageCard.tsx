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
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavouriteClick}
          aria-label="Favourites Button"
        >
          <Heart
            fill={isFavourite ? "red" : "white dark:black"}
            className="text-red-500"
          />
          {/* This span is visually hidden but provides an accessible label for screen readers */}
          {/* The "sr-only" class hides the text visually but keeps it accessible */}
          <span className="sr-only">Favourites Button</span>
        </Button>
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
