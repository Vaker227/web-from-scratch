import React from 'react'
import { Header } from '../../nav/redux/header.client.redux.js'
import { MainContainer } from '../../core/redux/main-container.client.redux.js'

export default function App(props) {
	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	)
}
