import { Button } from "../ui/button";

export const PaginationArrow = ({
  direction,
  onClick,
  isDisabled,
}: PaginationArrowProps) => {
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <Button
      onClick={onClick}
      className={`bg-gray-300 dark:bg-slate-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-slate-400 ${disabledClassName}`}
      aria-disabled={isDisabled}
      aria-label={isLeft ? "left button" : "right button"}
      disabled={isDisabled}
      data-test-id={isLeft ? "left-button" : "right-button"}
    >
      {isLeft ? "«" : "»"}
    </Button>
  );
};
