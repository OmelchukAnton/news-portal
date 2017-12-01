const webpack = require('webpack');
const path = require('path');

const PATHS = {
  public: path.join(__dirname, 'public'),
  build: path.join(__dirname, 'build')
};

const config = {
  entry: path.resolve('./src/entry.jsx'),
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
    },
    module: {
      rules: [
        {
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          },
          {
              loader: "sass-loader"
          }]
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [{
              loader: 'babel-loader'
          }]
        },
        // {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: [{
        //         loader: 'babel-loader'
        //     }]
        // },
        // {
        //     test: /\.jsx$/,
        //     exclude: /node_modules/,
        //     use: [{
        //         loader: 'babel-loader'
        //     }]
        // }
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    }
};

module.exports = config;
