const route = require('express').Router();
const Controller = require('../controllers/carController');
const {
  authorization,
} = require('../middlewares/authorization');

route.get('/cars', Controller.findAll);

route.post('/cars', Controller.create);

route.use(authorization);

route.put('/cars/:id', Controller.update);

route.delete('/cars/:id', Controller.delete);

module.exports = route;
