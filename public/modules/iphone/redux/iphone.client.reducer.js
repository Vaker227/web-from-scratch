const key = 'iphone'

const IphoneReducer = (state = { iphoneRender: 0 }, action) => {
	switch (action.type) {
		case 'IPHONE_RENDER':
			return Object.assign({}, state, { iphoneRender: state.iphoneRender + 1 })
		default:
			return state
	}
}
export { IphoneReducer as Reducer, key }
