import React from 'react'
import loadable from '@loadable/component'
import { Loading } from './loading.jsx'
import { Route } from 'react-router-dom'
import Error from './error-handle.jsx'
import store from '../redux/store.js'
// define routes and route's path
export const routes = [
	{ path: 'home', file: 'home/redux/home' },
	{ path: 'iphone', file: 'iphone/redux/iphone' },
	{ path: 'xiaomi', file: 'xiaomi/redux/xiaomi' },
	{ path: 'samsung', file: 'samsung/redux/samsung' },
]

// generate routes
const Routes = routes.map((route) => {
	return (
		<Route
			key={route.path}
			path={'/' + route.path}
			render={() => {
				// loadable(function-return-promise,object)
				const LoadableComponent = loadable(
					() =>
						import(
							/* webpackChunkName: "[request]" */ `../../${route.file}.client.redux.js`
						)
							.then((data) => {
								store.injectReducer(route.path, data.Reducer)
								return data.CP
							})
							.catch(() => Error),
					{
						fallback: <Loading />,
					}
				)
				return <LoadableComponent />
			}}
		></Route>
	)
})
export default Routes
