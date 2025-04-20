import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageCard from "@/components/image-card/ImageCard";
import { useFavouritesContext } from "@/providers/FavouriteContextProvider";
import "@testing-library/jest-dom";

// Mock the useFavouritesContext hook
jest.mock("@/providers/FavouriteContextProvider", () => ({
  useFavouritesContext: jest.fn(),
}));

describe("ImageCard Component", () => {
  const mockAddFavourite = jest.fn();
  const mockRemoveFavourite = jest.fn();

  beforeEach(() => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      favourites: [],
      addFavourite: mockAddFavourite,
      removeFavourite: mockRemoveFavourite,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with the correct name", () => {
    render(<ImageCard src="/test-image.png" name="Pikachu" id={1} />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
  });

  it("shows the heart icon as unfilled when the item is not a favourite", () => {
    render(<ImageCard src="/test-image.png" name="Pikachu" id={1} />);

    const heartIcon = screen
      .getByLabelText("Favourites Button")
      .querySelector("svg");
    expect(heartIcon).not.toHaveAttribute("fill", "red");
  });

  it("shows the heart icon as filled when the item is a favourite", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      favourites: [1],
      addFavourite: mockAddFavourite,
      removeFavourite: mockRemoveFavourite,
    });

    render(<ImageCard src="/test-image.png" name="Pikachu" id={1} />);

    const heartIcon = screen
      .getByLabelText("Favourites Button")
      .querySelector("svg");
    expect(heartIcon).toHaveAttribute("fill", "red");
  });

  it("calls addFavourite when the heart button is clicked and the item is not a favourite", () => {
    render(<ImageCard src="/test-image.png" name="Pikachu" id={1} />);

    const button = screen.getByLabelText("Favourites Button");
    fireEvent.click(button);

    expect(mockAddFavourite).toHaveBeenCalledWith(1);
  });

  it("calls removeFavourite when the heart button is clicked and the item is a favourite", () => {
    (useFavouritesContext as jest.Mock).mockReturnValue({
      favourites: [1],
      addFavourite: mockAddFavourite,
      removeFavourite: mockRemoveFavourite,
    });

    render(<ImageCard src="/test-image.png" name="Pikachu" id={1} />);

    const button = screen.getByLabelText("Favourites Button");
    fireEvent.click(button);

    expect(mockRemoveFavourite).toHaveBeenCalledWith(1);
  });
});
