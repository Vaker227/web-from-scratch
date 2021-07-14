const User = require('../controllers/users.server.controller')

module.exports = function (app) {
	app.get('/user/login', User.login)
	app.get('/user/register', User.register)
	app.get('/user/logout', User.logout)
	app.get('/api/user/get-user-info', User.requiresLogin, User.getUserInfo)
}
