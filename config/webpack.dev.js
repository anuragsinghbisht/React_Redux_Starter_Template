const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "./app/index.html",
  filename: "index.html",
  inject: "body"
  // favicon: './app/img/favicon.ico'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: false,
  allChunks: true
});

const WebpackPlugin = new webpack.ProvidePlugin({
  // inject ES5 modules as global vars
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery",
  Tether: "tether"
});

module.exports = {
  devtool: "cheap-module-source-map",

  entry: [
    "./node_modules/font-awesome/scss/font-awesome.scss",
    "./node_modules/bootstrap/scss/bootstrap.scss",
    "./app/index.js"
  ],

  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index.bundle.js",
    sourceMapFilename: "index.map"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPluginConfig.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },

  plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig, WebpackPlugin]
};
