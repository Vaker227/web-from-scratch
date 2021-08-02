import React from 'react'
import { Header } from '../../nav/redux/nav.client.redux.js'
import { MainContainer } from '../redux/main-container.client.redux.js'
import { ToastContainer, toast, Zoom } from 'react-toastify'

export default function App(props) {
	return (
		<div>
			<Header />
			<MainContainer />
			<ToastContainer
				position={toast.POSITION.BOTTOM_RIGHT}
				closeButton={false}
				hideProgressBar={true}
				transition={Zoom}
			/>
		</div>
	)
}
