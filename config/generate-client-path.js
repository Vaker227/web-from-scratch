const fs = require('fs')
const glob = require('glob')
const util = require('util')

const paths = glob.sync('public/modules/**/*.client.config.js')

const objs = []
paths.forEach((path) => {
	objs.push(require('../' + path))
})
fs.writeFileSync(
	'./public/routes.js',
	'module.exports = ' + util.inspect(objs),
	'utf-8'
)
