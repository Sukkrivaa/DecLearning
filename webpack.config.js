module.exports = {
	//Webapack Configuration
	mode: "development",
	entry: "./app/index.jsx",
	output: {
		filename: "./bundle.js",
		publicPath:"/",
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				exclude: /node_modules/,
				loader: [{
					loader: "babel-loader",
					options: {
						presets: ["react"]
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
