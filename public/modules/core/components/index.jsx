import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// import css file
import '../../../styles/bootstrap.scss'
import '../../../styles/index.css'
import '../../nav/style/header.client.css'
import '../../nav/style/menu.client.css'
import '../style/main-container.client.css'
import 'bootstrap'

// import fonawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import App from './app.jsx'
import store from '../redux/store.js'
import '../../config/services/config.client.service.js'

const root = document.getElementById('index')
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	root
)
