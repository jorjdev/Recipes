export const API_BASE_URL = 'https://api.spoonacular.com/';
const RECIPES = 'recipes';
const INGREDIENTS = 'food/ingredients';

export const RECIPES_ENDPOINTS = {
  searchRecipes: `${RECIPES}/complexSearch`,
  findByNutrients: `${RECIPES}/findByNutrients`,
  findByIngredients: `${RECIPES}/findByIngredients`,
  getRecipeInfo: (id: number) => `${RECIPES}/${id}/information`,
  getSimilarRecipe: (id: number) => `${RECIPES}/${id}/information`,
};

export const INGREDIENTS_ENDPOINTS = {
  searchIngredients: `${INGREDIENTS}/search`,
  getIngredientInfo: (id: number) => `${INGREDIENTS}/${id}/information`,
  getIngredientSubstitute: (id: number) => `${INGREDIENTS}/${id}/substitutes`,
};
