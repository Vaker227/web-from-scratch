import React from 'react'
import loadable from '@loadable/component'
import { Loading } from './loading.jsx'
import { Route } from 'react-router-dom'
import Error from './errorHandleComponent.jsx'

//define routes and route's path
export const routes = [
	{ path: 'home', file: 'home/home' },
	{ path: 'iphone', file: 'home/iphone' },
	{ path: 'xiaomi', file: 'home/xiaomi' },
	{ path: 'samsung', file: 'home/samsung' },
]

//generate routes
const Routes = routes.map((route) => {
	return (
		<Route
			key={route.path}
			path={'/' + route.path}
			render={() => {
				const LoadableComponent = loadable(
					() =>
						import(
							/* webpackChunkName: "[request]" */ `../${route.file}.jsx`
						).catch(() => Error),
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
