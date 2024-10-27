import { IFoods } from "@/utils/types";

const categoriesUrl = process.env.CATEGORY_API_URL || '';
const foodUrl = process.env.FOOD_API_URL || '';

export const getCategories = () =>
  fetch(categoriesUrl).then(
    (res) => res.json()
  );

export const getFoods = (): Promise<IFoods> =>
  fetch(foodUrl).then(
    (res) => res.json()
  );
