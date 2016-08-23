var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

var APP_DIR = path.resolve(__dirname, '../src');
var BUILD_DIR = path.resolve(__dirname, '../dest/scripts');
var CDN_DIR = path.resolve(__dirname, '../CDN/scripts');

var baseConfig = {
  target: 'web',
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.html$/, loader: 'handlebars-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle.min.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};

var cdnFiles = Object.assign({}, baseConfig, {
  entry: {
    'debugging-display-template': APP_DIR + '/display-templates/debugger/index.js'
  },
  output: {
    publicPath: '/',
    path: CDN_DIR,
    filename: '[name].bundle.js'
  }
});

module.exports = [cdnFiles];