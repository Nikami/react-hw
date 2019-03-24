const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const OUTPUT_DIR = path.resolve(__dirname, '../dist');
const port = process.env.PORT || 3000;

const POST_CSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: './config/',
    },
  },
};

module.exports = {
  context: __dirname,
  entry: path.join(APP_DIR, 'index.js'),
  output: {
    path: OUTPUT_DIR,
    filename: 'app.min.js',
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            POST_CSS_LOADER,
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      title: 'React HW',
      template: path.join(PUBLIC_DIR, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
      },
    }),
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  devServer: {
    port,
    inline: true,
    historyApiFallback: {
      index: path.join(PUBLIC_DIR, 'index.html'),
    },
  },
};
