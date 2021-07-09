import { connect } from 'react-redux'
import Home from '../components/home.client.component.jsx'
const HOME_RENDER = 'HOME_RENDER'
const HomeSTP = (state) => {
	return state.home
}

const HomeDTP = (dispatch) => {
	return {
		render: () => dispatch({ type: HOME_RENDER }),
	}
}

const HomeRedux = connect(HomeSTP, HomeDTP)(Home)

const HomeReducer = (state = { homeRender: 0 }, action) => {
	switch (action.type) {
		case HOME_RENDER:
			return Object.assign({}, state, { homeRender: state.homeRender + 1 })
		default:
			return state
	}
}
export { HomeRedux as CP, HomeReducer as Reducer }
