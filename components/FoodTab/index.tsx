import React from 'react';
import { useMemo } from "react";
import { TabProps } from "@/utils/types";
import "./style.scss";
import { useCategories } from "@/query/foods";
import { DEFAULT_VISIBLE_FOOD, useFoodsCollectionContext } from "@/contexts/FoodsCollectionContext";


const FoodTab: React.FC = () => {
    const { data } = useCategories();
    const { activeTab, setActiveTab, setFoodCount } = useFoodsCollectionContext();
    const tabs: TabProps[] = useMemo(() => {
      if (data) {
        return [
          {
            id: "",
            name: "All",
          },
          ...data,
        ];
      }
      return [
        {
          id: "",
          name: "All",
        },
      ];
    }, [data]);
  
    const openTab = (tabName: string) => {
      setActiveTab(tabName);
      setFoodCount(DEFAULT_VISIBLE_FOOD);
    };
  
    return (
      <div className="tab">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab-item active" : "tab-item"}
            onClick={() => openTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    );
};

export default FoodTab;
