import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import _ from 'lodash'

import { GetProfileInfo } from '../services/user.client.service.js'
import { MessageHandle } from '../../helper/message-handle.jsx'

export default function UserProfile(props) {
	const [dataUser, setDataUser] = useState(null)
	const params = useParams()
	const history = useHistory()

	useEffect(() => {
		const userId = _.get(props, 'user._id') || params.userId
		if (!userId) {
			MessageHandle.error('Invalid user ID!')
			MessageHandle.info('Redirecting home!')
			history.push('/')
			return
		}
		GetProfileInfo(userId)
			.then((response) => {
				MessageHandle.success('Got profile')
				document.title = response.data.username
				setDataUser(response.data)
			})
			.catch((err) => {
				MessageHandle.errorFromServer(err)
			})
	}, [])
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					{_.get(dataUser, 'username') || 'Loading'}
				</div>
			</div>
		</div>
	)
}
