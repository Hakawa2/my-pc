import { render, screen } from "@testing-library/react";

import { Icon } from "./Icon";

describe("IconComponent", () => {
  it("exibe o texto corretamente", () => {
    render(<Icon name="test" />);
    const element = screen.getByTestId("test");

    expect(element).toHaveAttribute("src", "/icons/test.png");
  });
});
