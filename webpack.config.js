const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool:'eval',
	entry: [
			'./js/index.js'
    ],
	output:{
		filename:'bundle.js',
		path:__dirname + '/dist',
		publicPath: 'http://localhost:8080/dist/'
	},
  resolve: {
    root: __dirname,
    extentions: ['.png','.js','.less','.scss'] /* add other extentions for webpack to look for*/
  },
	plugins: [
		// kills the compilation upon an error.
		// this keeps the outputed bundle **always** valid
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin(
      {
        template:'index.html',
        hash: true,
        // favicon: 'favicon.ico',
      }
    ),
	],
	module:{
		loaders:[
      {
        test:/\.js?$/,
        /* exclude node_modules from build process */
        exclude:/node_modules/,
        loaders : ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react','eslint-loader'],
      },
      {
        test: /\.less$/,
        loaders: ["style", "css", "less"]
      },
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader : 'file-loader'
			}
		]
	}
}
