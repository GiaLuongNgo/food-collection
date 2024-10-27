import { render, screen, fireEvent } from "@testing-library/react";
import { useCategories } from "@/query/foods";
import { useFoodsCollectionContext, DEFAULT_VISIBLE_FOOD } from "../../contexts/FoodsCollectionContext";
import FoodTab from "./index";

jest.mock("../../query/foods", () => ({
  useCategories: jest.fn(),
}));

jest.mock("../../contexts/FoodsCollectionContext", () => ({
  useFoodsCollectionContext: jest.fn(),
}));

describe("FoodTab", () => {
  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({
      data: [
        { id: "1", name: "Category 1" },
        { id: "2", name: "Category 2" },
      ],
    });

    (useFoodsCollectionContext as jest.Mock).mockReturnValue({
      activeTab: "",
      setActiveTab: jest.fn(),
      setFoodCount: jest.fn(),
    });
  });

  it("should render the tab buttons correctly", () => {
    render(<FoodTab />);
    const tabButtons = screen.getAllByRole("button");
    expect(tabButtons).toHaveLength(3); // Including the "All" tab
    expect(tabButtons[0]).toHaveTextContent("All");
    expect(tabButtons[1]).toHaveTextContent("Category 1");
    expect(tabButtons[2]).toHaveTextContent("Category 2");
  });

  it("should set the active tab and food count when a tab is clicked", () => {
    const setActiveTab = jest.fn();
    const setFoodCount = jest.fn();
    (useFoodsCollectionContext as jest.Mock).mockReturnValue({
      activeTab: "",
      setActiveTab,
      setFoodCount,
    });

    render(<FoodTab />);
    const categoryButton = screen.getByText("Category 1");
    fireEvent.click(categoryButton);

    expect(setActiveTab).toHaveBeenCalledWith("1");
    expect(setFoodCount).toHaveBeenCalledWith(DEFAULT_VISIBLE_FOOD);
  });
});