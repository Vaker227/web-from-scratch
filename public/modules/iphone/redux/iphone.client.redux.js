import { connect } from 'react-redux'
import Iphone from '../components/iphone.client.component.jsx'
const IPHONE_RENDER = 'IPHONE_RENDER'
const IphoneSTP = (state) => {
	return state.iphone
}

const IphoneDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: IPHONE_RENDER }),
	}
}

const IphoneRedux = connect(IphoneSTP, IphoneDTP)(Iphone)

const IphoneReducer = (state = { iphoneRender: 0 }, action) => {
	switch (action.type) {
		case IPHONE_RENDER:
			return Object.assign({}, state, { iphoneRender: state.iphoneRender + 1 })
		default:
			return state
	}
}
export { IphoneRedux as CP, IphoneReducer as Reducer }
