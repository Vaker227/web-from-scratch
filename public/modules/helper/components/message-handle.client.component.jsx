import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../style/message-handle.css'

export default function MessageHandle(props) {
	return <div className="message-handle">{props.message}</div>
}
