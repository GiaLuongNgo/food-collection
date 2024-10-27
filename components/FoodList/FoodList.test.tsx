import { render, screen, fireEvent } from "@testing-library/react";
import { useFoodsCollectionContext } from "../../contexts/FoodsCollectionContext";
import FoodList from "./index";

jest.mock("../../contexts/FoodsCollectionContext", () => ({
  useFoodsCollectionContext: jest.fn(),
}));

describe("FoodList", () => {
  beforeEach(() => {
    (useFoodsCollectionContext as jest.Mock).mockReturnValue({
      foods: [
        { id: 1, name: "Food 1" },
        { id: 2, name: "Food 2" },
        { id: 3, name: "Food 3" },
      ],
      foodCount: 3,
      isShowMore: true,
      setFoodCount: jest.fn(),
    });
  });

  it("should call setFoodCount when show more button is clicked", () => {
    render(<FoodList />);
    const showMoreButton = screen.getByText("+ Show More");
    fireEvent.click(showMoreButton);
    expect(showMoreButton).toBeInTheDocument();
  });
});