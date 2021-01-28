import { getMeals } from './getMeals';
import { getRecipes } from './getRecipes';

export const getPopulatedMeals = async () => {
  // get meals and recipe data from database
  const meals = await getMeals();
  const recipes = await getRecipes();

  // match recipe and meal ids
  const populatedMeals = meals.map((meal) => ({
    ...meal,
    recipe: recipes.find((recipe) => recipe.id === meal.recipeId),
  }));

  return populatedMeals;
};
