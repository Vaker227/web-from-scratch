import React from 'react'
import Header from '../../nav/components/header.client.component.jsx'
import { MainContainer } from '../redux/main-container.client.redux.js'

export default function App(props) {
	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	)
}
