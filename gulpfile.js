const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const del = require('del')

const paths = {
	clientJS: ['public/modules/**/**'],
	serverJS: ['server.js', 'src/app/views', 'config'],
	distFiles: ['public/dist/**', '!public/dist/'],
}

async function useWebpack() {
	const webpackRunner = webpack(webpackConfig)
	await webpackRunner.run((err, stats) => {
		if (err) {
			console.log(err)
			return
		}
		if (stats.hasErrors()) {
			stats.toJson().errors.map((error) => {
				console.log(error.details)
			})
			return
		}
		return gulp.src('public/dist/*.js').pipe(livereload())
	})
}

function cleanUpDist() {
	return del(paths.distFiles)
}

function runServer() {
	return nodemon({
		script: 'server.js',
		nodeArgs: ['--inspect'],
		watch: [...paths.serverJS, paths.clientJS],
		ext: 'cjs,js,html,jsx',
	})
}

function watchChangeClient() {
	livereload.listen(35729)
	watch(paths.clientJS, series(cleanUpDist, useWebpack))
}

exports.default = series(
	cleanUpDist,
	useWebpack,
	parallel(runServer, watchChangeClient)
)
exports.build = useWebpack
exports.watch = watchChangeClient
