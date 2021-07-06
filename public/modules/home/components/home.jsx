import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Home(props) {
	const [appearAnimation, setAppearAnimation] = useState(false)
	useEffect(() => {
		document.title = 'Home'
		props.render()
		setAppearAnimation(true)
	}, [])

	return (
		<CSSTransition classNames="page" timeout={700} in={appearAnimation}>
			<h1>Home {props.homeRender}</h1>
		</CSSTransition>
	)
}
