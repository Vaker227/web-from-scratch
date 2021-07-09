import React from 'react'

export default function MenuToggle(props) {
	const handleClick = () => {
		props.toggleMenu()
	}
	return (
		<div className="col-1">
			<div className="btn" onClick={handleClick}>
				<i className="fas fa-list fs-3"></i>
			</div>
		</div>
	)
}
