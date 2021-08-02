import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { MessageHandle } from '../../helper/message-handle.jsx'

export default function Iphone(props) {
	const [appearAnimation, setAppearAnimation] = useState(false)

	useEffect(() => {
		props.render()
		setAppearAnimation(true)
	}, [])
	const handleSuccess = () => {
		MessageHandle.success('Succesful click')
	}
	const handleInfo = () => {
		MessageHandle.info('Info click')
	}
	const handleError = () => {
		MessageHandle.error('Error click')
	}
	return (
		<CSSTransition classNames="page" timeout={700} in={appearAnimation}>
			<>
				<h1>Iphone {props.iphoneRender}</h1>
				<button
					type="button"
					onClick={handleSuccess}
					className="btn btn-success"
					id="liveToastBtn"
				>
					Success
				</button>
				<button
					type="button"
					onClick={handleInfo}
					className="btn btn-info"
					id="liveToastBtn"
				>
					Info
				</button>
				<button
					type="button"
					onClick={handleError}
					className="btn btn-danger"
					id="liveToastBtn"
				>
					Error
				</button>
			</>
		</CSSTransition>
	)
}
