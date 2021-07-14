const glob = require('glob')
const passport = require('passport')
const User = require('mongoose').model('User')
const path = require('path')

passport.serializeUser(function (user, done) {
	done(null, user.id)
})

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user)
	})
})

glob.sync('config/strategies/*.js').forEach((strategypath) => {
	require(path.resolve(strategypath))
})
