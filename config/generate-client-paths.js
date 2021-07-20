const fs = require('fs')
const glob = require('glob')
const util = require('util')

const paths = glob.sync('public/modules/**/*.client.config.js')

const objs = []
paths.forEach((path) => {
	require('../' + path).forEach((route) => {
		objs.push(route)
	})
})
fs.writeFileSync(
	'./public/paths/routes.js',
	'module.exports = ' + util.inspect(objs),
	'utf-8'
)
