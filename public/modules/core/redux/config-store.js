import { createStore, combineReducers, compose } from 'redux'
import { HeaderReducer } from '../../nav/redux/header.client.redux.js'
const staticReducers = {
	header: HeaderReducer,
}
const defaultState = {}

function createReducer(asyncReducers) {
	return combineReducers({
		...staticReducers,
		...asyncReducers,
	})
}
const enhancers = compose(
	typeof window !== 'undefined' && window.devToolsExtension
		? window.devToolsExtension()
		: (f) => f
)

export default function configureStore() {
	const store = createStore(createReducer(), defaultState, enhancers)

	store.asyncReducers = {}

	store.injectReducer = (key, asyncReducer) => {
		store.asyncReducers[key] = asyncReducer
		store.replaceReducer(createReducer(store.asyncReducers))
	}
	return store
}
