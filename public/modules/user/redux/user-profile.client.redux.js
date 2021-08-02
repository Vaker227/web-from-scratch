import _ from 'lodash'
import { connect } from 'react-redux'

import UserProfile from '../views/user-profile.client.view.jsx'

const STP = (state) => {
	return {
		user: _.get(state, 'users.user'),
	}
}

const UserProfileRedux = connect(STP)(UserProfile)

export { UserProfileRedux as Page }
