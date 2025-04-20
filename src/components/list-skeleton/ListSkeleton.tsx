import { Skeleton } from "@/components/ui/skeleton";
import { ITEMS_PER_PAGE } from "@/constants/api";

export function ListSkeleton() {
  return (
    <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(ITEMS_PER_PAGE)].map((e, i) => (
        <Skeleton key={i} className="h-[200px] w-[250px] rounded-xl" />
      ))}
    </div>
  );
}

export default ListSkeleton;
