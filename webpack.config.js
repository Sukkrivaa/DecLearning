const katex = require("katex");
const webpack = require("webpack");

module.exports = {
	//Webapack Configuration
	mode: "development",
	entry: "./app/index.jsx",
	output: {
		filename: "./bundle.js",
		publicPath:"/",
	},
	devtool: "eval-source-map",
	// plugins: [
	// 	new webpack.ProvidePlugin({
	// 		"window.katex": "katex"
	// 	})
	// ], //Included this in the cdn
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				exclude: /node_modules/,
				loader: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"]
					}
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				},
				{
					loader: "css-loader",
					options: {
						modules: true,
						camelCase: true,
						sourceMap: true
					}
				},
				{
					loader:"sass-loader"
				}]
			}
		]
	}
};
