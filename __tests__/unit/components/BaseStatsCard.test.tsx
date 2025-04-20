import { render, screen } from "@testing-library/react";
import BaseStatsCard from "@/components/base-stats-card/BaseStatsCard";
import { Stats } from "@/types/pokemon";

describe("BaseStatsCard", () => {
  const mockStats: Stats[] = [
    { base_stat: 45, stat: { name: "hp" } },
    { base_stat: 60, stat: { name: "attack" } },
    { base_stat: 50, stat: { name: "defense" } },
  ];

  it("renders the card header", () => {
    render(<BaseStatsCard stats={mockStats} />);
    expect(screen.getByText("Base Statistics")).toBeInTheDocument();
  });

  it("renders all stats passed as props", () => {
    render(<BaseStatsCard stats={mockStats} />);
    mockStats.forEach((stat) => {
      expect(screen.getByText(stat.stat.name)).toBeInTheDocument();
      expect(screen.getByText(stat.base_stat.toString())).toBeInTheDocument();
    });
  });

  it("renders the correct number of list items", () => {
    render(<BaseStatsCard stats={mockStats} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockStats.length);
  });

  it("renders a message when no stats are provided", () => {
    render(<BaseStatsCard stats={[]} />);
    expect(screen.getByText("No stats available")).toBeInTheDocument();
  });

  it("handles long stat names gracefully", () => {
    const longStatNameStats: Stats[] = [
      {
        base_stat: 70,
        stat: { name: "super-long-stat-name-that-exceeds-normal-length" },
      },
    ];
    render(<BaseStatsCard stats={longStatNameStats} />);
    expect(
      screen.getByText("super-long-stat-name-that-exceeds-normal-length")
    ).toBeInTheDocument();
    expect(screen.getByText("70")).toBeInTheDocument();
  });

  it("renders stats in the correct order", () => {
    render(<BaseStatsCard stats={mockStats} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0]).toHaveTextContent("hp");
    expect(listItems[1]).toHaveTextContent("attack");
    expect(listItems[2]).toHaveTextContent("defense");
  });
});
