/* eslint-disable no-console */
const ws = require('ws')
const http = require('http')

module.exports = {
	initServer: function ({ app, port }) {
		const server = http.createServer(app)
		const wss = new ws.Server({ server })
		wss.on('connection', () => {})
		server.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`)
		})
	},
}
