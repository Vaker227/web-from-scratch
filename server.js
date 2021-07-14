/* eslint-disable no-console */
require('dotenv').config()
const config = require('./config/config')

function loadExpress() {
	const express = require('./config/express')
	express()
}

function loadPassport() {
	require('./config/passport')
}

function connectDatabase() {
	const mongoose = require('mongoose')
	const chalk = require('chalk')
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
function main() {
	connectDatabase()
	loadExpress()
	loadPassport()
}
main()
