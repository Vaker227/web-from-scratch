const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')

module.exports.login = (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err || !user) {
			res.status(400).send(info)
		} else {
			if (user) {
				req.logIn(user, function (err) {
					if (err) {
						res.send(err)
					}
				})
				res.jsonp(req.user)
			} else {
				res.send(info)
			}
		}
	})(req, res, next)
}
module.exports.logout = (req, res, next) => {
	req.logout()
	res.jsonp(req.user)
}

module.exports.register = async (req, res) => {
	const { us, pw } = req.query
	if (us && pw) {
		const user = new User({ username: us, password: pw })
		await user.save()
		res.json(await User.findOne({ username: us }).exec())
	}
	res.send('invalid query')
}

module.exports.requiresLogin = (req, res, next) => {
	if (req.isAuthenticated()) {
		next()
	} else {
		res.status(401).send({ error: 'Dont have authorized' })
	}
}
module.exports.getUserInfo = (req, res, next) => {
	res.jsonp(req.user)
}
