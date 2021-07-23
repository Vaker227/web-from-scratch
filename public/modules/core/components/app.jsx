import React from 'react'
import { Header } from '../../nav/redux/nav.client.redux.js'
import { MainContainer } from '../redux/main-container.client.redux.js'

export default function App(props) {
	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	)
}
