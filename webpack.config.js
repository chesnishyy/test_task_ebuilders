const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: __dirname,
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?quiet=true',
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, './src')]
	}
};
