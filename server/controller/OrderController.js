import orders from '../model/orderModel';

class Orders {
   
    static createOrder(req, res) {
        const lastId = orders[orders.length - 1].id;
        const orderId = 'ord-' + parseInt(lastId + 1, 10);
        orders.push({
            id: parseInt(lastId + 1, 10),
            mealId: req.body.mealId,
            customerId: req.body.customerId,
            catererId: req.body.catererId,
            orderId: orderId,
            orderDate: Date.now(),
            orderStatus: 'pending',
        });
        return res.json({
            orders,
            message: 'new order made'
        });
    }


    static updateOrder(req, res) {
        for (let i = 0; i < orders.length; i += 1) {
            if (orders[i].orderId === req.params.orderId) {
                orders[i].orderStatus = req.body.orderStatus;

                return res.json({
                    orders,
                    message: 'order updated'
                });
            }
        } 
    }


    static getOrder(req, res) {
        let customerOrders = [];
        for (let i = 0; i < orders.length; i += 1) {
            if (orders[i].catererId === req.body.catererId && orders[i].orderDate === req.body.orderDate) {
                for (let j = 0; j < meals.length; j += 1) {
                    if (meals[j].mealId === orders[i].mealId) {
                        customerOrders.push({
                            id: meals[j].id,
                            mealId: meals[j].mealId,
                            catererId: meals[j].catererId,
                            mealName: meals[j].mealName,
                            mealAmount: meals[j].mealAmount,
                            customerId: orders[i].customerId,
                            orderId: orders[i].orderId,
                            orderDate: orders[i].orderDate,
                            orderStatus: orders[i].orderStatus,
                        });
                    }
                }
            }
        }
        return res.json({
            customerOrders
        });
    }



}


export default Orders;