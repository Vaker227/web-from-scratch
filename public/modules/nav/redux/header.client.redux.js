import { connect } from 'react-redux'
import MenuToggle from '../components/menu-toggle.client.component.jsx'
const SET_MENU = 'SET_MENU'

const MenuToggleSTP = (state) => {
	return state.header
}

const MenuToggleDTP = (dispatch) => {
	return {
		toggleMenu: () => dispatch({ type: SET_MENU }),
	}
}

const MenuToggleRedux = connect(MenuToggleSTP, MenuToggleDTP)(MenuToggle)

const HeaderReducer = (state = { menu: false }, action) => {
	switch (action.type) {
		case SET_MENU:
			return Object.assign({}, state, {
				menu: !state.menu,
			})
		default:
			return state
	}
}
export { MenuToggleRedux as MenuToggle, HeaderReducer }
