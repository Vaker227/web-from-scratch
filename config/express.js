const express = require('express')
const expresshdb = require('express-handlebars')

const path = require('path')
const app = express()
const port = 3000

module.exports = function () {
	app.engine('server.view.html', expresshdb())
	app.set('view engine', 'server.view.html')
	app.set('views', path.join(__dirname, '..', 'src', 'app', 'views'))

	app.use(express.static(path.join(__dirname, '../public')))
	app.get('/', (req, res) => {
		res.render('index')
	})
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
}
