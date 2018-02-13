const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const parentDir = path.join(__dirname, './');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
  },
};
