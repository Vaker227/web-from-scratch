import { connect } from 'react-redux'

import MenuToggle from '../components/menu-toggle.client.component.jsx'
import Header from '../views/header.client.view.jsx'
import Menu from '../views/menu.client.view.jsx'

import UserActionType from '../../user/redux/action-type.client.redux.js'
import NavActionType from '../../nav/redux/action-type.client.redux.js'

// Menu toggle
const MenuToggleSTP = (state) => {
	return state.nav
}

const MenuToggleDTP = (dispatch) => {
	return {
		toggleMenu: () => dispatch({ type: NavActionType.extendMenu }),
	}
}

const MenuToggleRedux = connect(MenuToggleSTP, MenuToggleDTP)(MenuToggle)

// Menu
const MenuSTP = (state) => {
	return state.nav
}

const MenuRedux = connect(MenuSTP)(Menu)

// Header
const HeaderSTP = (state) => {
	return { nav: state.nav, users: state.users }
}

const HeaderDTP = (dispatch) => {
	return {
		getUserInfo: (user) => {
			dispatch({ type: UserActionType.getUserInfo, user: user })
		},
		logoutUser: () => dispatch({ type: UserActionType.logoutUser }),
	}
}

const HeaderRedux = connect(HeaderSTP, HeaderDTP)(Header)

export {
	MenuToggleRedux as MenuToggle,
	HeaderRedux as Header,
	MenuRedux as Menu,
}
