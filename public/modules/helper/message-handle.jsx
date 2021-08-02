/* eslint-disable no-console */
import React from 'react'
import MessageHandleCP from './components/message-handle.client.component.jsx'
import { toast } from 'react-toastify'

const success = (message) => {
	toast.success(<MessageHandleCP message={message} />, { autoClose: 3000 })
}
const info = (message) => {
	toast.info(<MessageHandleCP message={message} />, { autoClose: 5000 })
}
const error = (message) => {
	console.log(message)
	toast.error(<MessageHandleCP message={message} />, { autoClose: false })
}
const errorFromServer = (message) => {
	console.log(message.response)
	toast.error(<MessageHandleCP message={message.response.data.message} />, {
		autoClose: false,
	})
}

export const MessageHandle = {
	success,
	info,
	error,
	errorFromServer,
}
