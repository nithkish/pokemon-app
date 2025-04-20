"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { GlobalContextType } from "@/types/global";
import { usePokemonData } from "@/hooks/usePokemonData";

const GlobalContext = createContext<GlobalContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
  pokemonList: {},
  pokemonListDetails: [],
  allPokemons: [],
  loading: false,
  error: "",
  maxPage: 10,
  setPokemonListDetails: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    pokemonList,
    pokemonListDetails,
    allPokemons,
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
        allPokemons,
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

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
