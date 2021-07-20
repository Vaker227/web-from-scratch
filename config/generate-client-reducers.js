const fs = require('fs')
const glob = require('glob')
const util = require('util')

const paths = glob.sync('public/modules/**/redux/*.client.reducer.js')

const objs = []
paths.forEach((path) => {
	path = path.replace('.client.reducer.js', '')
	objs.push(path)
})
fs.writeFileSync(
	'./public/paths/reducers.js',
	'module.exports = ' + util.inspect(objs),
	'utf-8'
)
