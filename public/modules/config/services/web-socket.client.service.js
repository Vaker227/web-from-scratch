import store from '../../core/redux/store.js'
import actionTypeClientRedux from '../../nav/redux/action-type.client.redux.js'

if (window !== 'undefined') {
	const WebSocket = window.WebSocket
	function connectWS() {
		const ws = new WebSocket(`ws://localhost:3000`)
		ws.onopen = () => {
			store.dispatch({
				type: actionTypeClientRedux.offlineMode,
				isOfflineMode: false,
			})
		}
		ws.onclose = () => {
			store.dispatch({
				type: actionTypeClientRedux.offlineMode,
				isOfflineMode: true,
			})
			setTimeout(() => {
				connectWS()
			}, 10000)
		}
	}
	connectWS()
}
