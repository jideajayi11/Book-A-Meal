import meals from '../model/mealModel';

class Meals {

  static getMeals(req, res) {
    const catererId = req.params.catererId;

    const catererMeals = meals.filter((meal) => {
      return meal.catererId == catererId;
    });
    if(catererMeals.length > 0) {
      return res.status(201).json({
        catererMeals
      });
    }
    else {
      return res.status(400).json({
        error: 400,
        message: 'meal not found'
      });
    }
    
  }

  static getMeal(req, res) {
    const mealId = req.params.mealId;

    const meal = meals.filter((meal) => {
      return meal.mealId == mealId;
    });
    if(meal.length > 0) {
      return res.status(200).json({
        meal
      });
    }
    else {
      return res.status(400).json({
        error: 400,
        message: 'meal not found'
      });
    }
    
  }


  static createMeal(req, res) {
    if(req.body.catererId == '' || req.body.mealName == '' || req.body.mealAmount == '') {
      return res.status(400).json({
        error: 400,
        message: 'Incomplete parameters'
      });
    }

    const lastId = meals[meals.length - 1].id;
    const mealId = 'meal-' + parseInt(lastId + 1, 10);
    meals.push({
      id: parseInt(lastId + 1, 10),
      mealId: mealId,
      catererId: req.body.catererId,
      mealName: req.body.mealName,
      mealAmount: req.body.mealAmount,
      imgUrl: req.body.imgUrl,
      dateAdded: Date.now()
    });
    return res.status(201).json({
      meals,
      message: 'new meal added'
    });
  }


  static updateMeals(req, res) {
    const mealId = req.params.mealId;

    const index = meals.findIndex((meal) => {
      return meal.mealId == mealId;
    });
    if(index >= 0) {
      meals.splice(index, 1, {
        id: meals[index].id,
        mealId: meals[index].mealId,
        catererId: meals[index].catererId,
        mealName: req.body.mealName,
        mealAmount: req.body.mealAmount,
        imgUrl: req.body.imgUrl,
        dateAdded: meals[index].dateAdded
      });
    
      return res.status(200).json({
        meals,
        message: 'meal updated'
      });
    }
    else {
      return res.status(400).json({
        error: 400,
        message: 'meal not found'
      });
    }
  }


    static deleteMeals(req, res) {
      const mealId = req.params.mealId;

      const index = meals.findIndex((meal) => {
        return meal.mealId == mealId;
      });

      if(index >= 0) {
        meals.splice(index, 1);
      
        return res.status(200).json({
          meals,
          message: 'meal deleted'
        });
      }
      else{
        return res.status(400).json({
          error: 400,
          message: 'meal not found'
        });
      } 
    }

}


export default Meals;