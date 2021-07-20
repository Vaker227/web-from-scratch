import axios from 'axios'
import { connect } from 'react-redux'

import MenuToggle from '../components/menu-toggle.client.component.jsx'
import Header from '../components/header.client.component.jsx'
import Menu from '../components/menu.client.component.jsx'

import UserActionType from '../../user/redux/action-type.client.redux.js'
import NavActionType from '../../nav/redux/action-type.client.redux.js'

// Menu toggle
const MenuToggleSTP = (state) => {
	return state.header
}

const MenuToggleDTP = (dispatch) => {
	return {
		toggleMenu: () => dispatch({ type: NavActionType.setMenu }),
	}
}

const MenuToggleRedux = connect(MenuToggleSTP, MenuToggleDTP)(MenuToggle)

// Menu
const MenuSTP = (state) => {
	return state.header
}

const MenuRedux = connect(MenuSTP)(Menu)

// Header
const HeaderSTP = (state) => {
	return { header: state.header, users: state.users }
}

const HeaderDTP = (dispatch) => {
	return {
		getUserInfo: () => {
			axios
				.get('/api/user/get-user-info')
				.then((result) => {
					dispatch({ type: UserActionType.getUserInfo, user: result.data })
				})
				.catch(() => {
					dispatch({ type: UserActionType.getUserInfo, user: null })
				})
		},
	}
}

const HeaderRedux = connect(HeaderSTP, HeaderDTP)(Header)

export {
	MenuToggleRedux as MenuToggle,
	HeaderRedux as Header,
	MenuRedux as Menu,
}
