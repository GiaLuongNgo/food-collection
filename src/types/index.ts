import { ReactNode } from "react";

export interface IContainer {
  children: ReactNode;
  className?: string;
}

export interface IFoodProps {
  data: IFood;
}

export interface IFood {
  id: string;
  index: number;
  rating: number;
  promotion?: string | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export interface TabProps {
  id: string;
  name: string;
}

export interface IFoods {
  foods: IFood[]
}

