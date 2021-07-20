const key = 'samsung'

const SamsungReducer = (state = { samsungRender: 0 }, action) => {
	switch (action.type) {
		case 'SAMSUNG_RENDER':
			return Object.assign({}, state, {
				samsungRender: state.samsungRender + 1,
			})
		default:
			return state
	}
}

export { SamsungReducer as Reducer, key }
