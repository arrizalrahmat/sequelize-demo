const route = require('express').Router();
const Controller = require('../controllers/userController.js');

route.post('/register', Controller.register);
route.post('/login', Controller.login);

module.exports = route;
