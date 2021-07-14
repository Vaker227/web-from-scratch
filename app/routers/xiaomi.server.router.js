const xiaomi = require('../controllers/xiaomi.server.controller')

module.exports = (app) => {
	app.get('/api/xiaomi', xiaomi.getInfo)
}
