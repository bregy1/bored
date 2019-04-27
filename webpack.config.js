const path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: './src/main.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './www/js'),
		filename: '[name].js'
	},
	devServer: {
    contentBase: path.join(__dirname, './www'),
    compress: false,
    port: 8000
  },
	node: {
    __dirname: false
  },
	devtool: "source-map",
	plugins: [    
			new LiveReloadPlugin({
				protocol: 'http',
				hostname: 'localhost',
				appendScriptTag: true,
				ignore: null,
				port: 56545
			})
	],
	module: {
		rules: [{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: ["babel-loader", "awesome-typescript-loader"]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'standard-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
	externals: ["react"]
}
