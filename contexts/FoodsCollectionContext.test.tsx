import { renderHook } from "@testing-library/react";
import { useFoodsCollectionContext } from "./FoodsCollectionContext";

describe("FoodsCollectionContext", () => {
  it("should provide the correct initial context values", () => {
    const { result } = renderHook(() => useFoodsCollectionContext());

    expect(result.current.foods).toEqual([]);
    expect(result.current.foodCount).toEqual(9);
    expect(result.current.activeTab).toEqual("");
    expect(result.current.isShowMore).toEqual(false);
  });
});