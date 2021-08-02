import React from 'react'
import { Logout } from '../../user/services/user.client.service.js'
import { Link } from 'react-router-dom'

function UserMenu(props) {
	const handleLogout = () => {
		Logout().then((res) => {
			props.handleLogout()
		})
	}
	return (
		<div id="user-menu" className="float-end d-flex me-3 align-items-center">
			<div>{props.user.username}</div>
			<div className="dropdown">
				<button
					className="btn btn-light dropdown-toggle"
					data-bs-toggle="dropdown"
					style={{ padding: '15px 10px' }}
				></button>
				<ul className="dropdown-menu">
					<li>
						<Link className="dropdown-item" to={'/my-profile'}>
							Profile
						</Link>
					</li>
					<li>
						<Link className="dropdown-item" to={`/home`}>
							Calendar
						</Link>
					</li>
					<li>
						<span className="dropdown-item btn" onClick={handleLogout}>
							Logout
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default UserMenu
