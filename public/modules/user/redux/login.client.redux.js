import { connect } from 'react-redux'

import Login from '../../user/components/login.client.component.jsx'

import NavActionType from '../../nav/redux/action-type.client.redux.js'

const LoginDTP = (dispatch) => {
	return {
		hiddenMenu: (isHidden = true) =>
			dispatch({ type: NavActionType.hiddenMenu, hidden: isHidden }),
	}
}

const LoginRedux = connect(null, LoginDTP)(Login)

export { LoginRedux as Login }
