const User = require('../controllers/users.server.controller')
const { renderJSX } = require('../../config/renderJSX')

module.exports = function (app) {
	// render view
	app.get('/my-profile', renderJSX)
	app.get('/user-profile/:profile', renderJSX)
	app.get('/login', renderJSX)

	// api
	app.post('/login', User.login)
	app.get('/logout', User.logout)
	app.get('/user/register', User.register)
	app.get('/api/user/get-user-info', User.requiresLogin, User.getUserInfo)
	app.get('/api/user-profile/:userId', User.getProfile)

	app.param('userId', User.getUserById)
}
