import axios from 'axios'
import _ from 'lodash'

export function Login(user) {
	return axios.post('/login', {
		username: _.get(user, 'username'),
		password: _.get(user, 'password'),
	})
}

export function Logout() {
	return axios.get('/logout')
}

export function GetUserInfo() {
	return axios.get('/api/user/get-user-info')
}

export function GetProfileInfo(userId) {
	return axios.get(`/api/user-profile/${userId}`)
}
