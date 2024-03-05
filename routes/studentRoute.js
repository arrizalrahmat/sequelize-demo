const route = require('express').Router();
const Controller = require('../controllers/studentController');

route.get('/students', Controller.findAll);
route.post('/students', Controller.create);
route.get('/students/:id', Controller.findOne);
route.put('/students/:id', Controller.update);
route.delete('/students/:id', Controller.delete);

module.exports = route;
