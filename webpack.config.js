module.exports = {
	entry:'./js/index.js',
	output:{
		filename:'./dist/index.js',
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:"style-loader!css-loader"
			},
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['react','es2015']
				}
			}
			,
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
