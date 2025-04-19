interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  isDisabled: boolean;
}
