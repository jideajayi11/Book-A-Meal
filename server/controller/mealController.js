import mealModel from '../model/mealModel';

class Meals {
    static getMeals(req, res) {
        return res.json({
            mealModel
        });
    }
}

export default Meals;