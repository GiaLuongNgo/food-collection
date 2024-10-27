import { render } from "@testing-library/react";
import Container from "./index";

describe("Container", () => {
  it("should render the container with children", () => {
    const { getByText } = render(
      <Container>
        <div>Child 1</div>
        <div>Child 2</div>
      </Container>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("should render the container with custom className", () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Child</div>
      </Container>
    );

    expect(container.firstChild).toHaveClass("container");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});