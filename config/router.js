const { renderJSX } = require('./renderJSX')

module.exports = function router(app) {
	app.get('/home', (req, res) => {
		renderJSX(req, res)
	})
	app.get('/xiaomi', (req, res) => {
		renderJSX(req, res)
	})
	app.get('/iphone', (req, res) => {
		renderJSX(req, res)
	})
	app.get('/samsung', (req, res) => {
		renderJSX(req, res)
	})
	app.get('/login', (req, res) => {
		renderJSX(req, res)
	})
	app.get('/', (req, res) => {
		renderJSX(req, res)
	})
}
