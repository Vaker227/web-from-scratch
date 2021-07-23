const User = require('../controllers/users.server.controller')

module.exports = function (app) {
	app.post('/login', User.login)
	app.get('/logout', User.logout)
	app.get('/user/register', User.register)

	app.get('/api/user/get-user-info', User.requiresLogin, User.getUserInfo)
}
