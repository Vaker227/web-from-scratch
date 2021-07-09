import { connect } from 'react-redux'
import MainContainer from '../components/main-container.jsx'

const MainContainerSTP = (state) => {
	return state.header
}

const MainContainerRedux = connect(MainContainerSTP)(MainContainer)

export { MainContainerRedux as MainContainer }
