import Menu from '../controller/MenuController';

export default (app) => {
  app.post('/api/v1/menu', Menu.createMenu);
  app.get('/api/v1/menu', Menu.getMenu);
};