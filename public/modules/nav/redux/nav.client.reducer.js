import NavActionType from '../../nav/redux/action-type.client.redux.js'

const key = 'nav'

// Reducer
const HeaderReducer = (state = { menu: false }, action) => {
	switch (action.type) {
		case NavActionType.setMenu:
			return Object.assign({}, state, {
				menu: !state.menu,
			})
		default:
			return state
	}
}
export { HeaderReducer as Reducer, key }
