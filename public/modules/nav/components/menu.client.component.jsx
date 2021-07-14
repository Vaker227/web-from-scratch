import React from 'react'

const Menu = (props) => {
	return (
		<div
			id="sidebar"
			className="d-flex flex-column"
			style={{
				width: props.menu ? 200 : 60,
				height: '100vh',
			}}
		>
			<div className="p-2 bd-highlight">{props.menu}</div>
			<div className="p-2 bd-highlight">Flex item 1</div>
			<div className="p-2 bd-highlight">Flex item 2</div>
			<div className="p-2 bd-highlight">Flex item 3</div>
		</div>
	)
}

export default Menu
