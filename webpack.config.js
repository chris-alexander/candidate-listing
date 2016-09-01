var NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { /* Lint JavaScript */
        test: /\.jsx?$/,
        include: /src/,
        loader: 'eslint'
      }
    ],
    loaders: [
      { /* Compile ES6 and JSX to ES5 */
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { /* Compile sass and extract as separate file */
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'data/candidates.json',
        to: 'data'
      }
    ])
  ]
};

if (NODE_ENV === 'production') {
  config.plugins = [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ].concat(config.plugins);
}

module.exports = config;
