import meals from '../model/mealModel'; 
import menu from '../model/menuModel';
import orders from '../model/orderModel';

class Meals {
    static getMeals(req, res) {
        const catererId = req.body.catererId;
        let catererMeals = [];
        for (let i = 0; i < meals.length; i += 1) {
            if (meals[i].catererId === catererId) {
                catererMeals.push({
                    id: meals[i].id,
                    mealId: meals[i].mealId,
                    catererId: meals[i].catererId,
                    mealName: meals[i].mealName,
                    mealAmount: meals[i].mealAmount,
                    imgUrl: meals[i].imgUrl,
                    dateAdded: meals[i].dateAdded,
                });
            }
        } 
        return res.json({
            catererMeals
        });
    }


    static getMeals2(req, res) {
        return res.json({
            meals
        });
    }
}

export default Meals;