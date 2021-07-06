import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function SamSung(props) {
	const [appearAnimation, setAppearAnimation] = useState(false)
	useEffect(() => {
		props.render()
		setAppearAnimation(true)
	}, [])
	return (
		<CSSTransition classNames="page" timeout={700} in={appearAnimation}>
			<h4>Samsung - {props.samsungRender}</h4>
		</CSSTransition>
	)
}
