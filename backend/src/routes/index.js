const routes = require('express').Router();
const authController = require('../controllers/authController');

routes.get('/', (req, res) => {
	return res.json({ ok: false });
});

routes.get('/index', authController.index);
routes.get('/auth', authController.auth);

module.exports = routes;
