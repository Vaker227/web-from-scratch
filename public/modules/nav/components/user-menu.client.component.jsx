import React from 'react'
import { Logout } from '../../user/services/user.client.service.js'

function UserMenu(props) {
	const handleLogout = () => {
		Logout().then((res) => {
			props.handleLogout()
		})
	}
	return (
		<div className={'float-end d-flex me-3'}>
			<div>{props.name} </div>
			<div className="dropdown">
				<button
					className="btn btn-light dropdown-toggle"
					data-bs-toggle="dropdown"
				></button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
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
