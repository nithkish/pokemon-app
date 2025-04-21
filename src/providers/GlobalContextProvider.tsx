"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { GlobalContextType } from "@/types/global";
import { usePokemonData } from "@/hooks/usePokemonData";

const GlobalContext = createContext<GlobalContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
  pokemonList: {},
  pokemonListDetails: [],
  loading: false,
  error: "",
  maxPage: undefined,
  setPokemonListDetails: () => {},
});

/**
 * GlobalContextProvider is a React context provider component that supplies global state
 * and functions related to Pokémon data to its child components.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the global context.
 *
 * @returns {JSX.Element} A context provider wrapping the children components.
 *
 * @context
 * - `currentPage` (number): The current page number for paginated Pokémon data.
 * - `setCurrentPage` (React.Dispatch<React.SetStateAction<number>>): Function to update the current page.
 * - `pokemonList` (any[]): The list of Pokémon fetched for the current page.
 * - `pokemonListDetails` (any[]): Detailed information about the Pokémon in the current list.
 * - `loading` (boolean): Indicates whether the Pokémon data is currently being loaded.
 * - `error` (any): Error object or message if an error occurs during data fetching.
 * - `maxPage` (number): The maximum number of pages available for Pokémon data.
 * - `setPokemonListDetails` (React.Dispatch<React.SetStateAction<any[]>>): Function to update the Pokémon list details.
 */
export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // state to manage the current page value
  const [currentPage, setCurrentPage] = useState(1);

  // data fetched by api and setters for wrapping in the Global context
  const {
    pokemonList,
    pokemonListDetails,
    loading,
    error,
    maxPage,
    setPokemonListDetails,
  } = usePokemonData(currentPage);

  return (
    <GlobalContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pokemonList,
        pokemonListDetails,
        loading,
        error,
        maxPage,
        setPokemonListDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the Global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
