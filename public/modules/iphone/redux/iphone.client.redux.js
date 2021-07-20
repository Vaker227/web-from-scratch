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

export { IphoneRedux as CP }
