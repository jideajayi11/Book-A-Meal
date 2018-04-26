import express from 'express';
import routes from '../server/routes/mealRoute';

const app = express();
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Book a Meal'
}));

export default app;