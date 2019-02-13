'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'application.js',
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from:  path.join(__dirname, 'static')
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('prod')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-0"]
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              //publicPath: path.join(root, 'static')
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "src")
    ]
  }
};
