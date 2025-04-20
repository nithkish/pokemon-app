import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "@/sections/nav-bar/NavBar";
import { useRouter } from "next/router";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock NavButtons component
jest.mock("@/components/nav-buttons/NavButtons", () => () => (
  <div data-testid="nav-buttons">NavButtons</div>
));

describe("NavBar Section", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders the logo with a link to the home page", () => {
    render(<NavBar />);
    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the navigation buttons", () => {
    render(<NavBar />);
    const navButtons = screen.getByTestId("nav-buttons");
    expect(navButtons).toBeInTheDocument();
  });

  it("has a sticky navigation bar", () => {
    render(<NavBar />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toHaveClass("sticky");
  });
});
