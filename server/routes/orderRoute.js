import Orders from '../controller/OrderController';

export default (app) => {
  app.post('/api/v1/orders', Orders.createOrder);
  app.put('/api/v1/orders/:orderId', Orders.updateOrder);
  app.get('/api/v1/orders/:catererId', Orders.getOrder);
};