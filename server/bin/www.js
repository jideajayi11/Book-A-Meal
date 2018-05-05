import * as http from 'http';
//import env from 'dotenv';
//env.config();
import app from '../app';
import Sequelize from 'sequelize';

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

console.log('connected to port');

const sequelize = new Sequelize('postgres://hqsnpvzb:rE3oYKLf308BFZxGqJ6CK18ooU6vBeHG@elmer.db.elephantsql.com:5432/hqsnpvzb');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default server;