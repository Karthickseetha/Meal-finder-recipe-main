import React, { useState, useEffect } from 'react';
import Header from '../header/header.component';
import MealList from '../meallist/meallist.component';
import SingleMeal from '../singlemeal/singlemeal.component';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();

        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]); // If no meals are found, clear the existing meals
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search term has already been updated by the input change event
    // The useEffect will automatically fetch and update the meals based on the new search term
  };

  const handleMealClick = async (meal) => {
    const youtubeLink = await fetchYouTubeLink(meal.idMeal);
    setSelectedMeal({ ...meal, youtubeLink });
  };

  const fetchYouTubeLink = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();

      if (data.meals && data.meals[0].strYoutube) {
        const youtubeUrl = data.meals[0].strYoutube;
        const videoId = youtubeUrl.split('v=')[1];
        return videoId;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching YouTube link:', error);
      return null;
    }
  };

  return (
    <div className="container">
      <Header setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      <div id="result-heading"></div>
     
      {selectedMeal ? (
        <SingleMeal mealData={selectedMeal} />
      ) : (
        <MealList

          meals={meals}
          handleMealClick={handleMealClick}
        />
      )}
    </div>
  );
};

export default Recipes;
