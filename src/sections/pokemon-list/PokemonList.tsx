import ErrorScreen from "@/components/error-screen/ErrorScreen";
import { ListSkeleton } from "@/components/list-skeleton/ListSkeleton";
import { PaginationComponent } from "@/components/pagination/Pagination";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

export default function PokemonList() {
  const { pokemonListDetails, loading, error, maxPage } = useGlobalContext();

  if (loading) return <ListSkeleton />;

  if (error) return <ErrorScreen />;

  return (
    <>
      <section className="min-h-[91vh]">
        <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {!loading &&
            pokemonListDetails.map((pokemon: any, index: number) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </div>
      </section>
      <PaginationComponent pageCount={maxPage} />;
    </>
  );
}
