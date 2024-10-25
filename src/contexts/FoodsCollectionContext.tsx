import { useFoods } from "../query/foods";
import { IFood } from "../types";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from "react";

interface FoodsCollectionContext {
  foods: IFood[];
  activeTab: string;
  foodCount: number;
  isShowMore: boolean;
  setFoodCount: (foodCount: number) => void;
  setActiveTab: (id: string) => void;
  setText: (value: string) => void;
}

type Props = {
  children: ReactNode;
};

export const DEFAULT_VISIBLE_FOOD = 9;

const initFoodCollectionContext: FoodsCollectionContext = {
  foods: [],
  foodCount: DEFAULT_VISIBLE_FOOD,
  activeTab: "",
  isShowMore: false,
  setFoodCount: () => {},
  setActiveTab: () => {},
  setText: () => {},
};

export const FoodsCollectionContext = createContext<FoodsCollectionContext>(
  initFoodCollectionContext
);

export const useFoodsCollectionContext = () => useContext(FoodsCollectionContext);

export const FoodsCollectionProvider = ({ children }: Props) => {
  const [foodCount, setFoodCount] = useState(DEFAULT_VISIBLE_FOOD);
  const [text, setText] = useState("");
  const { data: foods } = useFoods();
  const [activeTab, setActiveTab] = useState("");

  const foodsByCategory = useMemo(() => {
    if (!foods) return [];
    if (!activeTab) return foods;

    return foods.filter((food) => food.categoryId === activeTab);
  }, [activeTab, foods, text]);

  const foodViews = useMemo(() => {
    if (!foodsByCategory) return [];
    if (!text) return foodsByCategory;

    return foodsByCategory.filter((food) =>
      food.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [foodsByCategory, foodCount]);

  const isShowMore = useMemo(() => {
    if (!foodsByCategory) return false;
    return foodCount < foodsByCategory.length;
  }, [foodCount, foodsByCategory]);

  useEffect(() => {
    if (!foods) return;
  }, [foods]);

  const value = {
    foods: foodViews,
    foodCount,
    activeTab,
    isShowMore,
    setFoodCount,
    setActiveTab,
    setText,
  };

  return (
    <FoodsCollectionContext.Provider value={value}>
      {children}
    </FoodsCollectionContext.Provider>
  );
};
