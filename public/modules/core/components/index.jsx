import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app.jsx'

// import css file
import '../../../styles/bootstrap.scss'
import '../../../styles/index.css'
import '../../nav/style/header.client.css'
import '../../nav/style/menu.client.css'

// import fonawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { Provider } from 'react-redux'
import store from '../redux/store.js'

const root = document.getElementById('index')
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	root
)
