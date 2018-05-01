import Meals from '../controller/MealController';

export default (app) => {
  app.get('/api/v1/meals/:catererId', Meals.getMeals);
  app.post('/api/v1/meals', Meals.createMeal);
  app.put('/api/v1/meals/:mealId', Meals.updateMeals);
  app.delete('/api/v1/meals/:mealId', Meals.deleteMeals);
};