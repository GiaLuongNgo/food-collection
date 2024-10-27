import { render, screen, fireEvent } from "@testing-library/react";
import FoodImage from "./index";

describe("FoodImage", () => {
  it("should render the food image component when a promotion is gift", () => {
    const promotion = "gift";
    render(<FoodImage src="path/to/image.jpg" promotion={promotion} />);
    const foodImage = screen.getByTestId("food-image");
    expect(foodImage).toBeInTheDocument();
  });

  it("should render the food image component when a promotion is discount", () => {
    const promotion = "discount";
    render(<FoodImage src="path/to/image.jpg" promotion={promotion} />);
    const foodImage = screen.getByTestId("food-image");
    expect(foodImage).toBeInTheDocument();
  });

  it("should render the food image component when a promotion is 1+1", () => {
    const promotion = "1+1";
    render(<FoodImage src="path/to/image.jpg" promotion={promotion} />);
    const foodImage = screen.getByTestId("food-image");
    expect(foodImage).toBeInTheDocument();
  });

  it("should not render the promotion pill when promotion prop is not provided", () => {
    render(<FoodImage src="path/to/image.jpg" promotion=""/>);
    const promotionPill = screen.queryByTestId("food-image-pill");
    expect(promotionPill).toBeNull();
  });

  it("should render the lazy loading skeleton when isLoading is true", () => {
    render(<FoodImage src="" promotion=""/>);
    const lazyLoadingSkeleton = screen.getByTestId("food-image__lazy");
    expect(lazyLoadingSkeleton).toBeInTheDocument();
  });

  it("should render the food image content when isLoading is false", () => {
    render(<FoodImage src="path/to/image.jpg" promotion=""/>);
    const foodImageContent = screen.getByTestId("food-image__content");
    fireEvent.load(foodImageContent);
    expect(foodImageContent).toBeInTheDocument();
  });
});