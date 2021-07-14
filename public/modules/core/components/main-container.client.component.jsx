import React from 'react'
import { Switch, Redirect, useLocation } from 'react-router-dom'
import Routes from './loadable-route.jsx'

import { Menu } from '../../nav/redux/header.client.redux.js'

const MainContainer = (props) => {
	const location = useLocation()
	return (
		<div id="main-container" className="container-fluid">
			<div className="row">
				<Menu />
				<div id="main-content" className="col">
					<Switch location={location}>
						<Redirect exact path="/" to="/home" />
						{Routes}
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default MainContainer
