/* eslint-disable no-console */
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then((registration) => {
				console.log(
					'ServiceWorker registration successful with scope: ',
					registration.scope
				)
			})
			.catch((err) => {
				console.log('ServiceWorker registration failed: ', err)
			})
	})
}
