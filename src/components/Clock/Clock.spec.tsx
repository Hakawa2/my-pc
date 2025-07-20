import { render, screen } from "@testing-library/react";

import { Clock } from "./Clock";

describe("ClockComponent", () => {
  it("should it return time correctly", () => {
    const formattedTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    render(<Clock />);
    const element = screen.getByTestId("clock");

    expect(element).toHaveTextContent(formattedTime);
  });
});
