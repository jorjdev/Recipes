import { Ingredient } from './Ingredient';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  healthScore: number;
  instructions: string;
  ingredients : Ingredient[];

}
