import { getIngredients, insertIngredient } from '../db';

export const addIngredientRoute = {
  method: 'post',
  path: '/ingredients',
  handler: async (req, res) => {
    // send a post request from frontend, with the information about what we want to add
    const ingredient = req.body;
    await insertIngredient(ingredient);
    const updatedIngredients = await getIngredients();
    res.status(200).json(updatedIngredients);
  },
};
