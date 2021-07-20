import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuToggle } from '../redux/nav.client.redux.js'
import _ from 'lodash'

function LoadingUser(props) {
	return (
		<div
			className={'circle-loader mx-auto'}
			style={{ borderWidth: 4, height: 30, width: 30 }}
		></div>
	)
}

function LoginButton(props) {
	return (
		<Link to="/login">
			<div className={'btn btn-primary mx-auto'} style={{ minWidth: 150 }}>
				Sign in
			</div>
		</Link>
	)
}

function UserMenu(props) {
	return <div className={'float-end me-3'}>{props.name}</div>
}

export default function Header(props) {
	useEffect(() => {
		props.getUserInfo()
	}, [])
	const userPlaceholder = !_.get(props, 'users.gotUserInfo') ? (
		<LoadingUser />
	) : _.get(props, 'users.user') ? (
		<UserMenu name={props.users.user.username} />
	) : (
		<LoginButton />
	)
	return (
		<div id="header" className={'container-fluid py-2'}>
			<div className="row">
				<MenuToggle />
				<div className="col d-flex justify-content-center">
					<div className="mx-2 nav-item">
						<Link to="/home" className="nav-link">
							Home
						</Link>
					</div>
					<div className="mx-2 nav-item">
						<Link to="/xiaomi" className="nav-link">
							Xiaomi
						</Link>
					</div>
					<div className="mx-2 nav-item">
						<Link to="/iphone" className="nav-link">
							Iphone
						</Link>
					</div>
					<div className="mx-2 nav-item">
						<Link to="/samsung" className="nav-link">
							Samsung
						</Link>
					</div>
				</div>
				<div className="col-2 ">{userPlaceholder}</div>
			</div>
		</div>
	)
}
