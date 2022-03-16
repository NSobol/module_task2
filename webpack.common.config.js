const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude:/node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
  				use: [
    			'file-loader',
    				{
      					loader: 'image-webpack-loader',
      					options: {
        				bypassOnDebug: true, // webpack@1.x
        				disable: true, // webpack@2.x and newer
      					},
    				},
  				],
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.html$/,
        		use: [
        			  	{
            			loader: 'html-loader',
          				},
        			],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
          template:"./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	]
}