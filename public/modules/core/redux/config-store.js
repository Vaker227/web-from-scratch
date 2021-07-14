import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { HeaderReducer } from '../../nav/redux/header.client.redux.js'
import { UserReducer } from '../../user/redux/user.client.redux.js'
import thunk from 'redux-thunk'

const staticReducers = {
	header: HeaderReducer,
	users: UserReducer,
}
const defaultState = {}

function createReducer(asyncReducers) {
	return combineReducers({
		...staticReducers,
		...asyncReducers,
	})
}
const reduxDevTools = () => {
	return typeof window !== 'undefined' && window.devToolsExtension
		? window.devToolsExtension()
		: (f) => f
}

const enhancers = compose(reduxDevTools(), applyMiddleware(thunk))

export default function configureStore() {
	const store = createStore(createReducer(), defaultState, enhancers)

	store.asyncReducers = {}

	store.injectReducer = (key, asyncReducer) => {
		store.asyncReducers[key] = asyncReducer
		store.replaceReducer(createReducer(store.asyncReducers))
	}
	return store
}
