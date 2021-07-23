import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../style/login.css'

import LoginForm from '../components/login-form.client.component.jsx'

function Login(props) {
	const history = useHistory()
	useEffect(() => {
		props.hideMenu(true)
		return () => {
			props.hideMenu(false)
		}
	}, [])
	const handleLogin = (user) => {
		props.loginUser(user)
		history.push('/')
	}
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					<LoginForm id="loginForm" handleLogin={handleLogin} />
				</div>
			</div>
		</div>
	)
}
export default Login
