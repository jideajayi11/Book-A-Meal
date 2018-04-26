import Meals from '../controller/mealController';
import mealModel from '../model/mealModel'; 


export default (app) => {
  app.get('/api/v1/mealModel', Meals.getMeals);
  app.post('/api/v1/mealModel', Meals.createMeals);
  //app.put('/api/v1/mealModel/:mealModelId', Meals.updateMeals);
  //app.delete('/api/v1/mealModel/:mealModelId', Meals.removeMeals);
  //app.get('/api/v1/mealModel/:mealModelId', Meals.retrieveMeals);
};