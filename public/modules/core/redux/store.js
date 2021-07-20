import storeConfig from './config-store.js'
import reducers from '../../../reducers.js'

// intilizie store
const store = storeConfig()

function inject() {
	if (typeof window !== 'undefined') {
		reducers.forEach((file) => {
			store.injectReducer(file.key, file.reducer)
		})
	}
}

// call to inject all reducers
inject()
export default store
