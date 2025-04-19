"use client";
import { FavouriteContextType, Favourites } from "@/types/favourites";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

const initFavourite: Favourites = {
  favourites: [],
};

// Create a context for the favourites
// This context will be used to provide the favourites
// to the components that need it
export const FavouriteContext = createContext<FavouriteContextType>({
  ...initFavourite,
  addFavourite: () => {},
  removeFavourite: () => {},
});

// This component manages the state of the favourites
// It uses localStorage to persist the favourites
// across page reloads and sessions
// It also provides functions to add and remove favourites
// from the state
export const FavouriteContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favourites, setFavourites] = useState<Favourites>(initFavourite);

  useEffect(() => {
    // Check if the favourites are in localStorage
    // If they are, parse them and set the state
    // Additional check to avoid parsing undefined string during the initial stage
    const favourites = localStorage.getItem("favourites");
    if (favourites && favourites !== "undefined") {
      setFavourites(JSON.parse(favourites) as Favourites);
    }
  }, []);

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
export const useFavouritesContext = () => {
  return useContext(FavouriteContext);
};
