var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var argv = require("minimist")(process.argv.slice(2));

const DEBUG = !argv.release;

var config = {
  entry: [].concat(DEBUG ? [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ] : []).concat([
    "./src/index.jsx"
  ]),
  devtool: DEBUG ? "source-map" : false,
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
  ].concat(DEBUG ? [] : [
    new webpack.optimize.UglifyJsPlugin()
  ]),
  postcss: function () {
    return [autoprefixer];
  }
};

module.exports = config;
