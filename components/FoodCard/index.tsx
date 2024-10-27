import React from 'react';
import { IFood } from "@/utils/types";
import "./style.scss";
import FoodImage from "@/components/FoodImage";
import { StarIcon } from "@/icons/IconStar";

const FoodCard: React.FC<{data: IFood}> = ({data}) => {

  const formatRating = (number: number): number | string => {
    if (isNaN(number)) {
      return 'Invalid number';
    }
    const formattedNumber = number.toFixed(1);
    return parseFloat(formattedNumber);
  };

  return (
    <div className="food-card">
      <FoodImage
        src={data.imageUrl}
        promotion={data.promotion}
        width={3}
        height={2}
      />
      <div className="food-card__content">
        <p className="food-card__content__title">{data.name}</p>
        <div className="food-card__content__tags">
          <div className="tag">
            <StarIcon /> {formatRating(data.rating)}
          </div>
          <div className="tag">
            {data.minCookTime}-{data.maxCookTime} min
          </div>
          {data.isNew && (
            <div className="tag">
              <span className="tag__new">New</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
