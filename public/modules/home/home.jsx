import React, { useEffect } from 'react'

export default function Home(props) {
	useEffect(() => {
		document.title = 'HOme'
		console.log(window)
	}, [])
	console.log('render home')
	return (
		<h1
			onClick={() => {
				console.log(window)
			}}
		>
			Home
		</h1>
	)
}
