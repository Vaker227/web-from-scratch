// import { connect } from 'react-redux'
// import axios from 'axios'
import UserActionType from '../../user/redux/action-type.client.redux.js'

const UserReducer = (state = { user: null, gotUserInfo: false }, action) => {
	switch (action.type) {
		case UserActionType.getUserInfo:
			return Object.assign({}, state, { user: action.user, gotUserInfo: true })
		default:
			return state
	}
}
export { UserReducer }
