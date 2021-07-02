const express = require('express')
const expresshdb = require('express-handlebars')
const morgan = require('morgan')

const path = require('path')
const app = express()
const port = 3000

module.exports = function () {
	// set handlebar as template engine
	app.engine('server.view.html', expresshdb())
	app.set('view engine', 'server.view.html')
	app.set('views', path.join(__dirname, '..', 'src', 'app', 'views'))

	// set public file like libraries and bundle
	app.use(express.static(path.join(__dirname, '../public')))

	//	morgan logger
	app.use(morgan('dev'))

	// router
	require('./router.js')(app)

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
}
