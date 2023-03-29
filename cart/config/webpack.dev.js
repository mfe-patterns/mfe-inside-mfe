const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  entry: {
    main: './src/index.js',
    dev: './src/dev-root.js',
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })  
  ]
}

module.exports = merge(commonConfig, devConfig);

