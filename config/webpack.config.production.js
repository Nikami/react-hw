const webpack = require('webpack');
const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackCommonConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '/react-hw';

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'PUBLIC_URL']),
  ],
  devtool: 'source-map',
});
