import Meals from '../controller/mealController';
import meals from '../model/mealModel'; 
import menu from '../model/menuModel';
import orders from '../model/orderModel';

export default (app) => {
  app.get('/api/v1/meals', Meals.getMeals);
  app.post('/api/v1/meals', Meals.createMeal);
  app.put('/api/v1/meals/:mealId', Meals.updateMeals);
  app.delete('/api/v1/meals/:mealId', Meals.deleteMeals);
  app.post('/api/v1/menu', Meals.createMenu);
  app.get('/api/v1/menu', Meals.getMenu);
};