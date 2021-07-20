const paths = require('./paths/reducers')
module.exports = paths.map((path) => {
	const file = require(`../${path}.client.reducer.js`)
	return { key: file.key, reducer: file.Reducer }
})
