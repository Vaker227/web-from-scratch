import React from 'react'

const Menu = (props) => {
	return (
		<>
			<div className="p-2 bd-highlight">{props.extend}</div>
			<div className="p-2 bd-highlight">Flex item 1</div>
			<div className="p-2 bd-highlight">Flex item 2</div>
			<div className="p-2 bd-highlight">Flex item 3</div>
		</>
	)
}

export default Menu
