import { useFoodsCollectionContext } from '../../contexts/FoodsCollectionContext';
import React, { useState } from 'react';

const FoodList: React.FC = () => {

  const { foods, isShowMore, setFoodCount } = useFoodsCollectionContext();
  return (
    <div>
      {foods.map((food, index) => (
        <div key={index}>{food.toString()}</div>
      ))}
      {!isShowMore && (
        <button onClick={() => setFoodCount(foods.length + 9)}>View More</button>
      )}
    </div>
  );
};

export default FoodList;
