import { render, screen } from "@testing-library/react";
import ErrorScreen from "@/components/error-screen/ErrorScreen";

describe("ErrorScreen Component", () => {
  it("should render the error message", () => {
    render(<ErrorScreen />);
    const errorMessage = screen.getByText(
      "Something went wrong. Please go to Home Page."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render the error logo", () => {
    render(<ErrorScreen />);
    const errorLogo = screen.getByAltText("Error Logo");
    expect(errorLogo).toBeInTheDocument();
  });

  it("should render the container with correct styling", () => {
    render(<ErrorScreen />);
    const container = screen.getByText(
      "Something went wrong. Please go to Home Page."
    ).parentElement;
    expect(container).toHaveClass(
      "flex flex-col gap-6 justify-center items-center h-[50vh] text-center"
    );
  });

  it("should render the Image component with correct attributes", () => {
    render(<ErrorScreen />);
    const errorLogo = screen.getByAltText("Error Logo");
    expect(errorLogo).toHaveAttribute("width", "100");
    expect(errorLogo).toHaveAttribute("height", "100");
  });

  it("should render the error message with correct styling", () => {
    render(<ErrorScreen />);
    const errorMessage = screen.getByText(
      "Something went wrong. Please go to Home Page."
    );
    expect(errorMessage).toHaveClass("text-2xl");
  });
});
