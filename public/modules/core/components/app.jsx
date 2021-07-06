import React from 'react'
import { Switch, Redirect, useLocation } from 'react-router-dom'
import Routes from './loadable-route.jsx'
import Header from '../../header/components/header.jsx'

export default function App(props) {
	const location = useLocation()
	return (
		<div>
			<Header />
			<h1 className={'bg-secondary'}>React</h1>
			<h3>Nav</h3>
			<Switch location={location}>
				<Redirect exact path="/" to="/home" />
				{Routes}
			</Switch>
		</div>
	)
}
