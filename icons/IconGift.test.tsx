import { render } from "@testing-library/react";
import { GiftIcon } from "./IconGift";

describe("GiftIcon", () => {
  it("should render the icon with default props", () => {
    const { getByTestId } = render(<GiftIcon />);
    const icon = getByTestId("gift-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "18");
    expect(icon).toHaveAttribute("height", "18");
  });

  it("should render the icon with custom props", () => {
    const { getByTestId } = render(
      <GiftIcon width="24" height="24" color="#ff0000" />
    );
    const icon = getByTestId("gift-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "24");
    expect(icon).toHaveAttribute("height", "24");
  });
});