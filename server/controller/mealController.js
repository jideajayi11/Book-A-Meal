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


    static createMeal(req, res) {
        const lastId = meals[meals.length - 1].id;
        const mealId = 'meal-' + parseInt(lastId + 1, 10);
        meals.push({
            id: parseInt(lastId + 1, 10),
            mealId: mealId,
            catererId: req.body.catererId,
            mealName: req.body.mealName,
            mealAmount: req.body.mealAmount,
            imgUrl: req.body.imgUrl,
            dateAdded: Date.now(),
        });
        return res.json({
            meals,
            message: 'new meal added'
        });
    }


    static updateMeals(req, res) {
        for (let i = 0; i < meals.length; i += 1) {
            if (meals[i].mealId === req.params.mealId) {
                meals[i].mealName = req.body.mealName;
                meals[i].mealAmount = req.body.mealAmount;
                meals[i].imgUrl = req.body.imgUrl;
            }
        } 
        return res.json({
            meals,
            message: 'meal updated'
        });
    }


    static deleteMeals(req, res) {
        for (let i = 0; i < meals.length; i += 1) {
            if (meals[i].mealId === req.params.mealId) {
                meals.splice(i, 1);
                return res.json({
                    meals,
                    message: 'meal deleted'
                });
            }
        } 
    }

    
    static createMenu(req, res) {
        const lastId = menu[menu.length - 1].id;
        menu.push({
            id: parseInt(lastId + 1, 10),
            mealId: req.body.mealId,
            catererId: req.body.catererId,
            menuDate: Date.now(),
        });
        return res.json({
            menu,
            message: 'new meal added to menu'
        });
    }
}

export default Meals;