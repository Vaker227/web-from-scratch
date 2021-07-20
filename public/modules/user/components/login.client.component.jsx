import React, { useEffect } from 'react'

function Login(props) {
	useEffect(() => {
		props.hideMenu(true)
		return props.hideMenu(false)
	})
	return <h2>Login</h2>
}

export default Login
