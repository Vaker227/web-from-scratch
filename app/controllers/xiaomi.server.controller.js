module.exports.getInfo = (req, res) => {
	setTimeout(() => {
		res.json({ product: 4, price: 100 })
	}, 5000)
}
