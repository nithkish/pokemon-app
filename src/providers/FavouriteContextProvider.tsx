"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

interface Favourite {
  favourites: number[];
}

interface FavouriteContextType extends Favourite {
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
}

const initFavourite: Favourite = {
  favourites: [],
};

const getInitialState = () => {
  const favourites = localStorage.getItem("favourites");
  return favourites ? JSON.parse(favourites) : initFavourite;
};

export const FavouriteContext = createContext<FavouriteContextType>({
  ...initFavourite,
  addFavourite: () => {},
  removeFavourite: () => {},
});

const FavouriteContextProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Favourite>(getInitialState);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
    console.log(favourites);
  }, [favourites]);

  const addFavourite = (id: number) =>
    setFavourites((prev) => ({
      ...prev,
      favourites: [...prev.favourites, id],
    }));

  const removeFavourite = (id: number) =>
    setFavourites((prev) => ({
      ...prev,
      favourites: prev.favourites.filter((favId) => favId !== id),
    }));

  return (
    <FavouriteContext.Provider
      value={{ ...favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
