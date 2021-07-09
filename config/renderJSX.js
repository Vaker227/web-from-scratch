require('@babel/register')({
	presets: ['@babel/preset-env', '@babel/preset-react'],
})

const React = require('react')
const ReactDOMServer = require('react-dom/server.js')
const { StaticRouter } = require('react-router-dom')
const appJSX = require('../public/modules/core/components/app.jsx').default
const { Provider } = require('react-redux')
const store = require('../public/modules/core/redux/store').default

module.exports.renderJSX = (req, res) => {
	const App = React.createElement(
		Provider,
		{ store: store },
		React.createElement(
			StaticRouter,
			{
				location: req.url,
			},
			React.createElement(appJSX)
		)
	)
	const markup = ReactDOMServer.renderToString(App)
	res.render('index', {
		markup,
	})
}
