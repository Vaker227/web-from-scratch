const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const { default: gulpfile } = require('../../4handy/4handy-work/gulpfile')

const paths = {
	clientJS: ['public/modules/**/**'],
	serverJS: ['server.js', 'src/app/views', 'config'],
}

async function useWebpack() {
	const webpackRunner = webpack(webpackConfig)
	await webpackRunner.run((err, stats) => {
		if (err) {
			console.log(err)
			return
		}
		if (stats.hasErrors()) {
			console.log(stats.toJson().errors)
			return
		}
		return gulp.src('public/dist/*.js').pipe(livereload())
	})
}

function runServer() {
	return nodemon({
		script: 'server.js',
		nodeArgs: ['--inspect'],
		watch: paths.serverJS,
		ext: 'js,html',
	})
}

function watchChange() {
	livereload.listen(35729)
	watch(paths.clientJS, useWebpack)
}

exports.default = series(useWebpack, parallel(runServer, watchChange))
exports.build = useWebpack
exports.watch = watchChange
