"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import { PaginationArrow } from "./PaginationArrow";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

export function PaginationComponent({ pageCount }: PaginationProps) {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            onClick={() => setCurrentPage(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          <span className="p-2 mx-5 font-bold text-gray-500 dark:text-white">
            {currentPage}
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationArrow
            direction="right"
            onClick={() => setCurrentPage(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
