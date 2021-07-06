import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './menu-toggle.jsx'

export default function Header(props) {
	return (
		<div className={'container-fluid py-2'}>
			<div className="row">
				<Toggle />
				<div className="col d-flex justify-content-center">
					<div className="mx-3 nav-item">
						<Link to="/home" className="nav-link">
							Home
						</Link>
					</div>
					<div className="mx-3 nav-item">
						<Link to="/xiaomi" className="nav-link">
							Xiaomi
						</Link>
					</div>
					<div className="mx-3 nav-item">
						<Link to="/iphone" className="nav-link">
							Iphone
						</Link>
					</div>
					<div className="mx-3 nav-item">
						<Link to="/samsung" className="nav-link">
							Samsung
						</Link>
					</div>
				</div>
				<div className="col-2 bg-success">3</div>
			</div>
		</div>
	)
}
