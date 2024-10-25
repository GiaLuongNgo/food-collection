import FoodList from './../components/FoodList';
import FoodTab from './../components/FoodTab';
import SearchInput from './../components/SearchInput';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <SearchInput />
      <FoodTab />
      <FoodList />
    </>
  );
};

export default HomePage;
