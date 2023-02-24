export interface Ingredient {
  id: number;
  name: string;
  description: string;
  metrics: { amount: number; unit: string };
  consistency: string;
}
