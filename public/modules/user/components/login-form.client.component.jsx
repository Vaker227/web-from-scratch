import React, { useState } from 'react'

import { Login } from '../../user/services/user.client.service.js'
import { MessageHandle } from '../../helper/message-handle.jsx'

function LoginForm(props) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleUserName = (e) => {
		setUsername(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		Login({ username, password })
			.then((res) => {
				MessageHandle.success('Login success')
				props.handleLogin(res.data)
			})
			.catch((err) => {
				MessageHandle.errorFromServer(err)
				return null
			})
	}
	return (
		<form id={props.id}>
			<div className="mb-3">
				<label htmlFor="loginUsername" className="form-label">
					Email address
				</label>
				<input
					type="username"
					onChange={handleUserName}
					className="form-control"
					id="loginUsername"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="loginPassword" className="form-label">
					Password
				</label>
				<input
					type="password"
					onChange={handlePassword}
					className="form-control"
					id="loginPassword"
				/>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" onClick={handleSubmit} className="btn btn-primary">
				Submit
			</button>
		</form>
	)
}

export default LoginForm
