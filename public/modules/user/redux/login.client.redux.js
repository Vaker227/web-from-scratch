import { connect } from 'react-redux'

import Login from '../views/login.client.view.jsx'

import NavActionType from '../../nav/redux/action-type.client.redux.js'
import UserActionType from '../../user/redux/action-type.client.redux.js'

const LoginDTP = (dispatch) => {
	return {
		hideMenu: (isHide = true) => {
			dispatch({ type: NavActionType.hideMenu, isHide })
		},
		loginUser: (user) => {
			dispatch({ type: UserActionType.loginUser, user: user })
		},
	}
}

const LoginRedux = connect(null, LoginDTP)(Login)

export { LoginRedux as Page }
