var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var APP_DIR = path.resolve(__dirname, '../src');
var CDN_DIR = path.resolve(__dirname, '../CDN/scripts');

var baseConfig = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'handlebars-loader' }
    ]
  }
};

var cdnFiles = Object.assign({}, baseConfig, {
  entry: {
    'debugging-display-template': APP_DIR + '/display-templates/debugger/index.js'
  },
  output: {
    publicPath: '/',
    path: CDN_DIR,
    filename: '[name].bundle.js'
  },
  plugins: [
    new LiveReloadPlugin({})
  ]
});

module.exports = [cdnFiles];