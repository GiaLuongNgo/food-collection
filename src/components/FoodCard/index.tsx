import React from 'react';

interface FoodCardProps {
    name: string;
    description: string;
    imageUrl: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="food-card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default FoodCard;
