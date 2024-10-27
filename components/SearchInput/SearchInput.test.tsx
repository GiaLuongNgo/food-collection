import { render, screen, fireEvent } from "@testing-library/react";
import { useFoodsCollectionContext } from "../../contexts/FoodsCollectionContext";
import SearchInput from "./index";

jest.mock("../../contexts/FoodsCollectionContext", () => ({
  useFoodsCollectionContext: jest.fn(),
}));

describe("SearchInput", () => {
  beforeEach(() => {
    (useFoodsCollectionContext as jest.Mock).mockReturnValue({
      setText: jest.fn(),
    });
  });

  it("should render the search input field", () => {
    render(<SearchInput />);
    const inputField = screen.getByPlaceholderText("Enter restaurant name...");
    expect(inputField).toBeInTheDocument();
  });

  it("should call setText when input value changes", () => {
    const setTextMock = jest.fn();
    (useFoodsCollectionContext as jest.Mock).mockReturnValue({
      setText: setTextMock,
    });

    render(<SearchInput />);
    const inputField = screen.getByPlaceholderText("Enter restaurant name...");
    fireEvent.change(inputField, { target: { value: "Pizza" } });

    expect(setTextMock).toHaveBeenCalledWith("Pizza");
  });
});