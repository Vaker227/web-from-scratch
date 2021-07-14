import { connect } from 'react-redux'
import MainContainer from '../../core/components/main-container.client.component.jsx'

const MainContainerRedux = connect()(MainContainer)

export { MainContainerRedux as MainContainer }
