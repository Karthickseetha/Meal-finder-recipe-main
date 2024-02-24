import React from 'react';
import './Singlemeal.styles.scss';

const SingleMeal = ({ mealData }) => {
  const ing = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = {
      items: mealData[`strIngredient${i}`],
      measures: mealData[`strMeasure${i}`],
    };

    if (mealData[`strIngredient${i}`] && mealData[`strMeasure${i}`]) {
      ing.push(ingredient);
    }
  }

  return (
    <div className="single-meal">
      <span id='single-meal-heading'>{mealData.strMeal}</span>
      <img src={mealData.strMealThumb} alt={mealData.strMeal} />
      <div className="single-meal-info">
        {mealData.strCategory && (
          <p>
            <b>Category</b> - {mealData.strCategory}
          </p>
        )}
        {mealData.strArea && (
          <p>
            <b>Place</b> -{mealData.strArea}
          </p>
        )}
      </div>
      <div className="main">
        <ul> {/* Changed from <p> to <ul> */}
          <li>{mealData.strInstructions}</li> {/* Changed from <p> to <li> */}
        </ul>
        <h2>Ingredients</h2>
        <ul>
          {ing.map(({ items, measures }, index) => (
            <li key={index}>
              {items} - {measures}
            </li>
          ))}
        </ul>
        {mealData.youtubeLink && (
          <div>
            <h2>Video Recipe</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${mealData.youtubeLink}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}


      </div>
    </div>
  );
};

export default SingleMeal;
