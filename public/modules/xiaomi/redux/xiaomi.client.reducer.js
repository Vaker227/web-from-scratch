const key = 'xiaomi'

const XiaomiReducer = (state = { xiaomiRender: 0 }, action) => {
	switch (action.type) {
		case 'XIAOMI_RENDER':
			return Object.assign({}, state, { xiaomiRender: state.xiaomiRender + 1 })
		case 'data':
			return Object.assign({}, state, { xiaomiData: action.data })
		default:
			return state
	}
}
export { XiaomiReducer as Reducer, key }
