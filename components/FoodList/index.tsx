import { useFoodsCollectionContext } from '@/contexts/FoodsCollectionContext';
import React from 'react';
import { DEFAULT_VISIBLE_FOOD } from '@/contexts/FoodsCollectionContext';
import FoodCard from '../FoodCard';
import './style.scss';

const FoodList: React.FC = () => {

  const { foods, foodCount, isShowMore, setFoodCount } = useFoodsCollectionContext();

  const handleShowMore = () => {
    setFoodCount(foodCount + DEFAULT_VISIBLE_FOOD);
  }
  return (
    <div className="food-list-wrapper">
      <div className="food-list">
        {foods && foods.map((food, index) => (
          <FoodCard key={index} data={food}></FoodCard>
        ))}
      </div>
      <div className="cards-action">
        {isShowMore && (
          <button className="show-more-button"
            onClick={handleShowMore}>+ Show More</button>
        )}
      </div>
    </div>
  );
};

export default FoodList;
