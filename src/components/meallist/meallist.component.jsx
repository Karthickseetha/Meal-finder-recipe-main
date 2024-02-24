import React from 'react';
import MealItem from '../mealItem/mealItem.component';
import './mealList.styles.scss'

const MealList = ({ meals, handleMealClick }) => {
  return (
    <div className="meals">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} handleMealClick={handleMealClick} />
      ))}
    </div>
  );
};

export default MealList;
