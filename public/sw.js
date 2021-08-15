const app_name = 'webApp'
const caches_version = 'v1.3'

const caches_name = `${app_name}-${caches_version}`

self.addEventListener('install', (event) => {
	self.skipWaiting()
	const urlsToPreFetch = ['/', '/home']
	event.waitUntil(
		caches.open(caches_name).then((cache) => {
			const urlsToPreFetchPromise = urlsToPreFetch.map((urlToPreFetch) => {
				const url = new URL(urlToPreFetch, location.href)
				return fetch(url)
					.then((response) => {
						if (response.status >= 400) {
							throw new Error(
								`request for ${urlsToPrefetch} failled with status ${response.statusText}`
							)
						}
						console.log(`Successfully cache ${urlToPreFetch}`)
						return cache.put(url, response)
					})
					.catch((err) => {
						console.log(`Cant caching ${urlToPrefetch}  due to ${err}`)
					})
			})
			return Promise.all(urlsToPreFetchPromise)
				.then(() => {
					console.log(`Successfully store ${caches_name}`)
				})
				.catch((err) => {
					console.log(`Fail to store ${caches_name} due to ${err}`)
				})
		})
	)
})

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys.map((key) => {
					if (key !== caches_name) {
						return caches.delete(key)
					}
				})
			)
		})
	)
})

const EXACT_URLS = ['http://localhost:3000/', 'http://localhost:3000/home']

const CACHE_URLS = [
	'main.css',
	'main.js',
	'vendor.js',
	'user/get-user-info',
	'home-redux-home-client-redux-js.js',
	'iphone-redux-iphone-client-redux-js.js',
	'samsung-redux-samsung-client-redux-js.js',
	'xiaomi-redux-xiaomi-client-redux-js.js',
]

self.addEventListener('fetch', (event) => {
	const url = event.request.url
	if (event.request.method != 'GET') return
	if (EXACT_URLS.includes(url)) {
		event.respondWith(
			fetch(url)
				.then((response) => {
					if (response.status >= 400) {
						caches.match(url).then((cacheResponse) => {
							if (cacheResponse) {
								return cacheResponse
							}
							console.log(`No cache found for ${url}`)
							return null
						})
					}
					return response
				})
				.catch((err) => {
					return caches.match(url).then((cacheResponse) => {
						if (cacheResponse) {
							return cacheResponse
						}
						console.log(`No cache found for ${url}`)
						return null
					})
				})
		)
	}
	if (CACHE_URLS.some((cacheUrl) => url.includes(cacheUrl))) {
		// request and response will be consumed when used then need to clone those
		const fetchRequest = event.request.clone()
		event.respondWith(
			fetch(url)
				.then((response) => {
					const responseToCache = response.clone()
					if (!response || response.status >= 400) {
						caches.match(url).then((cacheResponse) => {
							if (cacheResponse) {
								return cacheResponse
							}
						})
					}
					if (response && response.status < 400) {
						caches.open(caches_name).then((cache) => {
							cache.put(fetchRequest, responseToCache)
						})
					}
					return response
				})
				.catch((err) => {
					return caches.match(fetchRequest).then(function (cacheResponse) {
						if (cacheResponse) {
							return cacheResponse
						}
						console.log(`${url} is not cached`)
						return null
					})
				})
		)
	}
})
