const express = require('express')
const expresshdb = require('express-handlebars')
const morgan = require('morgan')
const glob = require('glob')
const config = require('./config')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const passport = require('passport')

const path = require('path')
const app = express()
const port = config.server.port || 3000

module.exports = function () {
	// import models
	// const modelpaths = glob.sync('app/models/**/*.server.model.js')
	const modelpaths = glob.sync('app/models/**/*.server.model.js')
	modelpaths.forEach((modelpath) => require(path.resolve(modelpath)))

	// set handlebar as template engine
	app.engine('server.view.html', expresshdb())
	app.set('view engine', 'server.view.html')
	app.set('views', path.join(__dirname, '..', 'app', 'views'))

	// set public file like libraries and bundle
	app.use(express.static(path.join(__dirname, '../public')))

	//	morgan logger
	app.use(morgan('dev'))

	// parse request
	app.use(express.json())

	// create session storage
	const sessionStore = mongoStore.create({
		mongoUrl: `mongodb://${config.db.host}:${config.db.port}/${config.db.collection}`,
	})

	// config session
	app.use(
		session({
			secret: 'secret',
			resave: false,
			saveUninitialized: false,
			store: sessionStore,
			cookie: { maxAge: 1000 * 3600 * 24 * 31 },
		})
	)

	// config passport
	app.use(passport.initialize())
	app.use(passport.session())

	// import routers
	const routerpaths = glob.sync('./app/routers/**/*.server.router.js')
	routerpaths.forEach((path) => require('../' + path)(app))
	require('./router.js')(app)

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`)
	})
}
