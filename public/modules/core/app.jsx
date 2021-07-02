import React from 'react'
import { Link, Switch, Redirect } from 'react-router-dom'
import Routes from './loadableRouteComponents.jsx'

export default function App(props) {
	return (
		<div>
			<h1>React</h1>
			<h3>Nav</h3>
			<ul>
				<li>
					<Link to="/home">home</Link>
				</li>
				<li>
					<Link to="/xiaomi">xiaomi</Link>
				</li>
				<li>
					<Link to="/iphone">iphone</Link>
				</li>
				<li>
					<Link to="/samsung">samsung</Link>
				</li>
			</ul>

			<Switch>
				<Redirect exact from="/" to="/home" />
				{Routes}
			</Switch>
		</div>
	)
}
