"use client";
import { useFavouritesData } from "@/hooks/useFavouritesData";
import { FavouriteContextType, Favourites } from "@/types/favourites";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

// This is the initial state of the favourites
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
  favouritesListDetails: [],
  loading: false,
  error: "",
});

// This component manages the state of the favourites
// It uses localStorage to persist the favourites
// across page reloads and sessions
// It also provides functions to add and remove favourites
export const FavouriteContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // Initialize the state with initial empty array
  const [favourites, setFavourites] = useState<Favourites>(initFavourite);

  //Flag to identify whether favourites are initalized
  const [isInitialized, setIsInitialized] = useState(false);

  // Get data to be added from the Context and fetch methods using custom hook
  const {
    favouritesListDetails,
    error,
    loading,
    fetchPokemonDetailsById,
    fetchPokemonDetails,
  } = useFavouritesData();

  // Check if the favourites are in localStorage
  // If they are, parse them and set the state
  // Also fetch initial Pokemon Details of favourite Pokemons
  // Additional check to avoid parsing undefined string during the initial stage
  useEffect(() => {
    const favourites = localStorage.getItem("favourites");
    if (favourites && favourites !== "undefined") {
      setFavourites(JSON.parse(favourites) as Favourites);
      fetchPokemonDetails(JSON.parse(favourites) as Favourites);
    }
    // Set the flag to true post initalization
    setIsInitialized(true);
  }, []);

  // Whenever the favourites state changes, update localStorage
  // This will persist the favourites across page reloads
  // and sessions
  // This will only run after the initial render
  // to avoid unnecessary updates to localStorage
  // and to avoid parsing undefined string during the initial stage
  useEffect(() => {
    // set values only post initialization
    if (isInitialized)
      localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Function to add a favourite to the state
  // This function takes an id as a parameter
  // and adds it to the favourites array in the state
  // Fetch the details into the context of newly added favourites
  const addFavourite = (id: number) => {
    setFavourites((prev) => ({
      ...prev,
      favourites: [...prev.favourites, id],
    }));
    fetchPokemonDetailsById(id);
  };

  // Function to remove a favourite from the state
  // This function takes an id as a parameter
  // and removes it from the favourites array in the state
  const removeFavourite = (id: number) => {
    setFavourites((prev) => ({
      ...prev,
      favourites: prev.favourites.filter((favId) => favId !== id),
    }));
  };

  // Return the context provider with the state and functions
  // This will provide the favourites and functions to the components that need it
  return (
    <FavouriteContext.Provider
      value={{
        ...favourites,
        addFavourite,
        removeFavourite,
        favouritesListDetails,
        error,
        loading,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

// Custom hook to use the favourites context
export const useFavouritesContext = () => {
  return useContext(FavouriteContext);
};
