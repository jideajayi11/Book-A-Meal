import express from 'express';
import routes from '../server/routes/mealRoute';


//let express = require('express');
//let routes = require('../server/routes/mealRoute');

const app = express();
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Book-A-Meal'
}));

export default app;