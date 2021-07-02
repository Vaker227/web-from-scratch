const path = require('path')

module.exports = {
	entry: '/public/modules/core/index.jsx',
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'public/dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					chunks: 'initial',
					test: /node_modules/,
					name: 'vendor',
				},
			},
		},
	},
}
