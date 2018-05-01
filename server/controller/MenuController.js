import menu from '../model/menuModel';

class Menu {
   
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


    static getMenu(req, res) {
        let catererMenu = [];
        for (let i = 0; i < menu.length; i += 1) {
            if (menu[i].catererId === req.params.catererId) {
                for (let j = 0; j < meals.length; j += 1) {
                    if (meals[j].mealId === menu[i].mealId) {
                        catererMenu.push({
                            id: meals[j].id,
                            mealId: meals[j].mealId,
                            catererId: meals[j].catererId,
                            mealName: meals[j].mealName,
                            mealAmount: meals[j].mealAmount,
                            imgUrl: meals[j].imgUrl,
                            dateAdded: meals[j].dateAdded,
                        });
                    }
                }
            }
        }
        return res.json({
            catererMenu
        });
    }

}


export default Menu;