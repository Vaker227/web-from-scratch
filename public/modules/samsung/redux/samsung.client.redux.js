import { connect } from 'react-redux'
import Samsung from '../views/samsung.client.view.jsx'
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

export { SamsungRedux as Page }
