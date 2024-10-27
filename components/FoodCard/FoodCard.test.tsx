import { render, screen } from "@testing-library/react";
import FoodCard from "./index";

const mockFood: any = {
  imageUrl: "https://example.com/food.jpg",
  promotion: true,
  name: "Pizza",
  rating: 4.5,
  minCookTime: 10,
  maxCookTime: 20,
  isNew: true,
};

describe("FoodCard", () => {
  it("should render the food card with correct data", () => {
    render(<FoodCard data={mockFood} />);
    
    const foodImage = screen.getByTestId("food-image");
    expect(foodImage).toBeInTheDocument();
    
    const title = screen.getByText(mockFood.name);
    expect(title).toBeInTheDocument();
    
    const rating = screen.getByText(mockFood.rating.toString());
    expect(rating).toBeInTheDocument();
    
    const cookTime = screen.getByText(`${mockFood.minCookTime}-${mockFood.maxCookTime} min`);
    expect(cookTime).toBeInTheDocument();
    
    const newTag = screen.getByText("New");
    expect(newTag).toBeInTheDocument();
  });
});