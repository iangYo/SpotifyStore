const routes = require('express').Router();
const authController = require('../controllers/authController');

routes.get('/show', authController.show);
routes.get('/callback', authController.callback);

routes.get('/catchToken', authController.catchToken);

module.exports = routes;