import NoFavourites from "@/components/no-favourites/NoFavourites";
import { render, screen } from "@testing-library/react";

describe("NoFavourites Component", () => {
  it("should render the image with correct src and alt attributes", () => {
    render(<NoFavourites />);
    const image = screen.getByAltText("Sad Pikachu Logo");
    expect(image).toBeInTheDocument();
  });

  it("should render the correct text message", () => {
    render(<NoFavourites />);
    const message = screen.getByText(
      "No favourites yet! Please add your favourite Pokemons!"
    );
    expect(message).toBeInTheDocument();
  });

  it("should have the correct layout classes", () => {
    render(<NoFavourites />);
    const container = screen.getByText(
      "No favourites yet! Please add your favourite Pokemons!"
    ).parentElement;
    expect(container).toHaveClass(
      "flex flex-col gap-6 justify-center items-center h-[50vh] text-center"
    );
  });

  it("should render the image with the correct dimensions", () => {
    render(<NoFavourites />);
    const image = screen.getByAltText("Sad Pikachu Logo");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
  });

  it("should render a single image element", () => {
    render(<NoFavourites />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(1);
  });

  it("should render the text inside a div element", () => {
    render(<NoFavourites />);
    const message = screen.getByText(
      "No favourites yet! Please add your favourite Pokemons!"
    );
    expect(message.tagName).toBe("DIV");
  });
});
