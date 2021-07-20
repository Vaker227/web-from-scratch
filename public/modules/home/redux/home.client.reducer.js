const key = 'home'

const HomeReducer = (state = { homeRender: 0 }, action) => {
	switch (action.type) {
		case 'HOME_RENDER':
			return Object.assign({}, state, { homeRender: state.homeRender + 1 })
		default:
			return state
	}
}
export { HomeReducer as Reducer, key }
