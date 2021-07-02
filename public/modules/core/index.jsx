import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app.jsx'
import './index.css'

const root = document.getElementById('index')
ReactDOM.hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	root
)
