import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Iphone(props) {
	const [appearAnimation, setAppearAnimation] = useState(false)

	useEffect(() => {
		props.render()
		setAppearAnimation(true)
	}, [])
	return (
		<CSSTransition classNames="page" timeout={700} in={appearAnimation}>
			<h1>Iphone{props.iphoneRender}</h1>
		</CSSTransition>
	)
}
