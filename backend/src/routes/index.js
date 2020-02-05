const routes = require('express').Router();
const authController = require('../controllers/authController');

routes.get('/index', authController.index);
routes.get('/show', authController.show);
routes.get('/callback', authController.callback);

module.exports = routes;