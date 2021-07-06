import { connect } from 'react-redux'
import Xiaomi from '../components/xiaomi.jsx'
const XIAOMI_RENDER = 'XIAOMI_RENDER'
const XiaomiSTP = (state) => {
	return state.xiaomi
}

const XiaomiDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: XIAOMI_RENDER }),
	}
}

const XiaomiRedux = connect(XiaomiSTP, XiaomiDTP)(Xiaomi)

const XiaomiReducer = (state = { xiaomiRender: 0 }, action) => {
	switch (action.type) {
		case XIAOMI_RENDER:
			return Object.assign({}, state, { xiaomiRender: state.xiaomiRender + 1 })
		default:
			return state
	}
}
export { XiaomiRedux as CP, XiaomiReducer as Reducer }
