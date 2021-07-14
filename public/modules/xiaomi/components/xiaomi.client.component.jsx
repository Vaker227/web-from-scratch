import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Xiaomi(props) {
	const [appearAnimation, setAppearAnimation] = useState(false)
	const handleData = () => {
		props.getData()
	}
	useEffect(() => {
		props.render()
		setAppearAnimation(true)
	}, [])
	return (
		<CSSTransition classNames="page" timeout={700} in={appearAnimation}>
			<div>
				<h1>Xiaomi - {props.xiaomiRender}</h1>
				<div className="btn btn-danger" onClick={handleData}>
					Get data
				</div>

				{props.xiaomiData ? (
					<>
						<h2>{props.xiaomiData.product}</h2>
						<h2>{props.xiaomiData.price}</h2>
					</>
				) : (
					''
				)}
			</div>
		</CSSTransition>
	)
}
