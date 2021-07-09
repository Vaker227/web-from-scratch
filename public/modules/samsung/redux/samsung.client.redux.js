import { connect } from 'react-redux'
import Samsung from '../components/samsung.client.component.jsx'
const SAMSUNG_RENDER = 'SAMSUNG_RENDER'
const SamsungSTP = (state) => {
	return state.samsung
}

const SamsungDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: SAMSUNG_RENDER }),
	}
}

const SamsungRedux = connect(SamsungSTP, SamsungDTP)(Samsung)

const SamsungReducer = (state = { samsungRender: 0 }, action) => {
	switch (action.type) {
		case SAMSUNG_RENDER:
			return Object.assign({}, state, {
				samsungRender: state.samsungRender + 1,
			})
		default:
			return state
	}
}
export { SamsungRedux as CP, SamsungReducer as Reducer }
