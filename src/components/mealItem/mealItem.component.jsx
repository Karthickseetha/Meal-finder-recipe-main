import React, { useState } from 'react';
import './mealItem.styles.scss';

const MealItem = ({ meal, handleMealClick }) => {



  return (
    <div className="meal" onClick={() => handleMealClick(meal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-info">
        <h4>{meal.strMeal}</h4>
      </div>
    </div>
  );
};

export default MealItem;
