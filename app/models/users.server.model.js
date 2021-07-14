const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const UserSchema = new Scheme(
	{
		username: { type: String, unique: true, required: 'Username invalid' },
		password: { type: String, required: 'Username invalid' },
	},
	{
		timestamps: true,
	}
)

UserSchema.methods.validPassword = function (pw) {
	return this.password === pw
}
mongoose.model('User', UserSchema)
