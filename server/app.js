import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routesMeal from '../server/routes/mealRoute';
import routesMenu from '../server/routes/menuRoute';
import routesOrder from '../server/routes/menuRoute';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routesMeal(app);
routesMenu(app);
routesOrder(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Book-A-Meal'
}));

export default app;