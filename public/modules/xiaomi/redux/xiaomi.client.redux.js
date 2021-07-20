import { connect } from 'react-redux'
import Xiaomi from '../components/xiaomi.client.component.jsx'
import axios from 'axios'

const XIAOMI_RENDER = 'XIAOMI_RENDER'

const XiaomiSTP = (state) => {
	return state.xiaomi
}

const XiaomiDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: XIAOMI_RENDER }),
		getData: async () => {
			const res = await axios.get('/api/xiaomi')
			dispatch({ type: 'data', data: res.data })
		},
	}
}

const XiaomiRedux = connect(XiaomiSTP, XiaomiDTP)(Xiaomi)

export { XiaomiRedux as CP }
