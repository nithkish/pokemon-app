"use client";
import ErrorScreen from "@/components/error-screen/ErrorScreen";
import ListSkeleton from "@/components/list-skeleton/ListSkeleton";
import PaginationComponent from "@/components/pagination/Pagination";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

/**
 * PokemonList Section Component
 *
 * This component is responsible for rendering a list of Pokémon cards.
 * It fetches the Pokémon data from the global context and displays it
 * in a responsive grid layout. Additionally, it handles loading and error
 * states and includes pagination functionality.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Pokémon list component.
 *
 * @remarks
 * - Uses `useGlobalContext` to access the Pokémon data, loading state, error state, and maximum page count.
 * - Displays a skeleton loader (`ListSkeleton`) while data is loading.
 * - Shows an error screen (`ErrorScreen`) if there is an error fetching data.
 * - Renders a grid of Pokémon cards (`PokemonCard`) when data is successfully fetched.
 * - Includes a pagination component (`PaginationComponent`) if `maxPage` is defined.
 *
 */
export default function PokemonList() {
  const { pokemonListDetails, loading, error, maxPage } = useGlobalContext();

  if (loading) return <ListSkeleton />;

  if (error) return <ErrorScreen />;

  return (
    <>
      <section className="min-h-[91vh]">
        <div className="p-5 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {!loading &&
            pokemonListDetails.map((pokemon: any, index: number) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </div>
        {maxPage && <PaginationComponent pageCount={maxPage} />}
      </section>
    </>
  );
}
