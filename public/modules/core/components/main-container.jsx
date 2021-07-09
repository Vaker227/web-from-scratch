import React from 'react'
import { Switch, Redirect, useLocation } from 'react-router-dom'
import Routes from './loadable-route.jsx'

import Menu from '../../nav/components/menu.client.component.jsx'

const MainContainer = (props) => {
	const location = useLocation()
	return (
		<div id="main-container" className="container-fluid">
			<div className="row">
				<div
					id="sidebar"
					className="d-flex flex-column"
					style={{
						width: props.menu ? 200 : 60,
						height: '100vh',
						position: 'fixed',
					}}
				>
					<Menu extend={props.menu} />
				</div>
				<div
					id="main-content"
					className="col"
					style={{ marginLeft: props.menu ? 200 : 60, height: 2000 }}
				>
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
