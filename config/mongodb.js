/* eslint-disable no-console */

const mongoose = require('mongoose')
const chalk = require('chalk')
const config = require('./config')

module.exports = function () {
	try {
		mongoose.connect(
			`mongodb://${config.db.host}:${config.db.port}/${config.db.collection}`,
			{ useNewUrlParser: true, useUnifiedTopology: true }
		)
		mongoose.set('useCreateIndex', true)
		console.log(chalk.green('Connected ') + 'to database')
	} catch (error) {
		console.log(chalk.red(error))
	}
}
