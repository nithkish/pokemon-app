import { PaginationComponent } from "@/components/pagination/Pagination";
import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

export default function PokemonList() {
  const { pokemonList, pokemonListDetails, loading, error, maxPage } =
    useGlobalContext();

  return (
    <>
      <section className="min-h-[91vh]">
        <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
