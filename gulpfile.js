const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const exec = require('child_process').exec
const del = require('del')

const paths = {
	clientJS: ['public/modules/**/**'],
	serverJS: ['server.js', 'app/', 'config'],
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
		watch: [...paths.serverJS, ...paths.clientJS],
		ext: 'cjs,js,html,jsx',
	})
}

//generate file list of routes
function genRoutesFile(cb) {
	exec('node config/generate-client-paths.js', function (err, stdout, stderr) {
		if (stdout) {
			console.log(stdout)
		}
		if (stderr) {
			console.log(stderr)
		}
		cb(err)
	})
}

// generate file list of reducers
function genReducers(cb) {
	exec(
		'node config/generate-client-reducers.js',
		function (err, stdout, stderr) {
			if (stdout) {
				console.log(stdout)
			}
			if (stderr) {
				console.log(stderr)
			}
			cb(err)
		}
	)
}

function watchChangeClient() {
	livereload.listen(35729)
	watch(
		paths.clientJS,
		series(cleanUpDist, genRoutesFile, genReducers, useWebpack)
	)
}

exports.default = series(
	cleanUpDist,
	genRoutesFile,
	genReducers,
	useWebpack,
	parallel(runServer, watchChangeClient)
)

exports.build = useWebpack
exports.server = parallel(runServer, watchChangeClient)
exports.watch = watchChangeClient
exports.genRoutes = genRoutesFile
exports.genReducers = genReducers
