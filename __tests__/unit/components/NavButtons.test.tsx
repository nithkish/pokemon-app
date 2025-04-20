import { render, screen } from "@testing-library/react";
import NavButtons from "@/components/nav-buttons/NavButtons";
import { useRouter } from "next/router";

// Mock the next/router module
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/components/ui/button", () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}));

jest.mock("lucide-react", () => ({
  HomeIcon: () => <svg data-testid="home-icon" />,
  Heart: () => <svg data-testid="heart-icon" />,
}));

jest.mock("@/components/toggle-theme/ToggleTheme", () => () => (
  <div data-testid="toggle-theme" />
));

describe("NavButtons Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders navigation buttons correctly", () => {
    render(<NavButtons />);

    // Check if the Home button is rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();

    // Check if the Favourites button is rendered
    expect(screen.getByText("Favourites")).toBeInTheDocument();
    expect(screen.getByTestId("heart-icon")).toBeInTheDocument();
  });

  it("renders the ToggleTheme component", () => {
    render(<NavButtons />);

    // Check if the ToggleTheme component is rendered
    expect(screen.getByTestId("toggle-theme")).toBeInTheDocument();
  });

  it("renders links with correct href attributes", () => {
    render(<NavButtons />);

    // Check if the Home button has the correct href
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");

    // Check if the Favourites button has the correct href
    expect(screen.getByText("Favourites").closest("a")).toHaveAttribute(
      "href",
      "/favourites"
    );
  });

  it("renders the correct number of navigation buttons", () => {
    render(<NavButtons />);

    // Check if the correct number of buttons is rendered
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2); // Home and Favourites
  });

  it("renders button text only on large screens", () => {
    render(<NavButtons />);

    // Check if the button text is hidden on smaller screens
    const homeButtonText = screen.getByText("Home");
    const favouritesButtonText = screen.getByText("Favourites");

    expect(homeButtonText).toHaveClass("hidden lg:inline");
    expect(favouritesButtonText).toHaveClass("hidden lg:inline");
  });
});
