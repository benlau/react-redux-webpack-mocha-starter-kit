var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var argv = require("minimist")(process.argv.slice(2));

var config = {
  entry: [
    "./src/index.jsx"
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "react-hot!babel"
    },
      {
        test: /\.css$/,
        loader: "style!css!postcss"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [__dirname + "/src"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/build",
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: "static"}
    ])
  ],
  postcss: function () {
    return [autoprefixer];
  }
};

if (!argv.release) {
  config.devtool = "source-map";
  config.entry.unshift(
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  );
  config.output.path = __dirname + "/build";
  console.log(config.output.path);
} else {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
